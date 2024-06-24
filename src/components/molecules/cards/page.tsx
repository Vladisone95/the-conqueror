import Image from "next/image";
import { CardProps } from "@/lib/types/page";
import PrimaryButton from "@/components/atoms/PrimaryButton";

const CardComponent = ({
  card,
  usedCards,
  setUsedCards,
}: {
  card: CardProps;
  usedCards: number[];
  setUsedCards: Function;
}) => {
  return (
    <div className="w-[220px] max-w-[300px] h-[375px] overflow-visible border-[#D4D4D4] rounded-[6px] border-[1px] flex-grow relative">
      <div className="w-full z-[11] absolute top-[0] translate-y-[-30%]">
        <Image
          className="drop__shadow"
          src={card.image}
          alt="Card Hero"
          height={0}
          width={0}
          style={{ width: "100%", height: "auto", objectFit: "scale-down" }}
        />
      </div>
      <div className="w-full relative z-[10] fade__image">
        <Image
          src={card.background}
          alt="Card Background"
          height={0}
          width={0}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="flex justify-center flex-col items-center mt-[50px] px-[10px]">
        <div className="font-[700] text-[18px] leading-[21px]">
          {card.title}
        </div>
        <div className="text-[#323232] font-[500] text-[14px] leading-[14px] mt-[15px]">
          {card.distance}
        </div>
        <div className="text-[#323232] font-[400] text-[14px] leading-[14px] mt-[20px]">
          {card.virtualPostcards} Virtual Postcard
        </div>
        <div className="text-[#323232] font-[400] text-[14px] leading-[14px] mt-[10px]">
          {card.hasStreetView ? "Has StreetView" : "Does not have StreetView"}
        </div>
      </div>
      <div className="w-full absolute bottom-[20px] left-[50%] translate-x-[-50%] px-[10px]">
        <PrimaryButton
          onClick={() => {
            if (!usedCards.includes(card.id)) {
              setUsedCards([...usedCards, card.id]);
            }
          }}
          className={`${usedCards.includes(card.id) ? "bg-[#EF6453]" : "bg-black"} w-full`}
        >
          {usedCards.includes(card.id) ? "Challenge Added" : "Add Challenge"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CardComponent;
