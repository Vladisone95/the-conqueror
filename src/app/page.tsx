"use client";

import Image from "next/image";
import { cards } from "@/lib/constants/page";
import { CardProps } from "@/lib/types/page";
import CardComponent from "@/components/molecules/cards/page";
import Dropdown from "@/components/atoms/Dropdown";
import { ResponsiveNavButton } from "@/components/ResponsiveNavLink";
import { useRouter } from "next/navigation";
import ChevronDown from "@/assets/icons/ChevronBlack.png";
import { useUsedCardsContext } from "@/lib/context/usedCardsProvider";

export default function Home() {
  const router = useRouter();

  const { usedCards, setUsedCards } = useUsedCardsContext();

  return (
    <main className="w-[90%] md:container mx-auto pt-[100px]">
      <div className="text-black text-[45px] leading-[50px] text-center sm:mt-[30px] mt-[60px]">
        All challenges
      </div>
      <div className="h-[41px] mt-[20px] float-right flex items-center gap-x-[15px]">
        <div className="text-[14px]">Sort by:</div>
        <Dropdown
          align="right"
          width="15"
          hideChevron={true}
          trigger={
            <div className="flex justify-between border-[1px] rounded-[6px] border-[#BDBDBD] w-[200px] px-[10px] py-[10px]">
              <div className="text-[16px] font-[400] leading-[23px] text-black">
                Popular
              </div>
              <Image width={20} src={ChevronDown} />
            </div>
          }
        >
          <ResponsiveNavButton onClick={() => router.push("/")}>
            Price
          </ResponsiveNavButton>
          <ResponsiveNavButton onClick={() => router.push("/")}>
            Distance
          </ResponsiveNavButton>
          <ResponsiveNavButton onClick={() => router.push("/")}>
            Postcards
          </ResponsiveNavButton>
        </Dropdown>
      </div>
      <div className="flex flex-wrap w-[90%] md:container justify-center mx-auto pt-[60px] gap-x-[20px] gap-y-[60px] my-[60px]">
        {cards.map((card: CardProps, index: number) => (
          <CardComponent
            card={card}
            usedCards={usedCards}
            setUsedCards={setUsedCards}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
