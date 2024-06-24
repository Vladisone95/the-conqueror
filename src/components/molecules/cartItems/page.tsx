import Image from "next/image";
import { CardProps } from "@/lib/types/page";
import PrimaryButton from "@/components/atoms/PrimaryButton";

const CartComponent = ({
  card,
  usedCards,
  setUsedCards,
}: {
  card: CardProps;
  usedCards: number[];
  setUsedCards: Function;
}) => {
  return (
    <div className="border-[#D4D4D4] rounded-[6px] border-[1px] relative m-[20px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-start gap-x-[100px] flex-col md:flex-row items-center">
          <div className="w-[175px] z-[11] ml-[30px]">
            <Image
              className="drop__shadow"
              src={card.image}
              alt="Card Hero"
              height={0}
              width={0}
              style={{ width: "100%", height: "auto", objectFit: "scale-down" }}
            />
          </div>
          <div className="flex justify-center flex-col items-center px-[10px]">
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
              {card.hasStreetView
                ? "Has StreetView"
                : "Does not have StreetView"}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:flex justify-start gap-x-[50px] md:w-[100px] mt-[20px] md:mt-[0px]">
          <div className="font-[700] text-[18px] leading-[21px]">
            {card.price}$
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center my-[20px]">
        <div className="w-[250px] px-[10px]">
          <PrimaryButton
            onClick={() => {
              if (usedCards.includes(card.id)) {
                console.log(usedCards.indexOf(card.id));
                const newUsedCards = [...usedCards];
                newUsedCards.splice(usedCards.indexOf(card.id), 1);
                setUsedCards(newUsedCards);
              }
            }}
            className={`${usedCards.includes(card.id) ? "bg-[#EF6453]" : "bg-black"} w-full`}
          >
            {usedCards.includes(card.id) ? "Remove Challenge" : "Add Challenge"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
