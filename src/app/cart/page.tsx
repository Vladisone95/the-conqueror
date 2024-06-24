"use client";

import { useUsedCardsContext } from "@/lib/context/usedCardsProvider";
import { cards } from "@/lib/constants/page";
import CartComponent from "@/components/molecules/cartItems/page";
import PrimaryButton from "@/components/atoms/PrimaryButton";

export default function Cart() {
  const { usedCards, setUsedCards } = useUsedCardsContext();

  let totalPrice = 0;

  usedCards.map((card: number) => {
    totalPrice += cards.find((item) => item.id === card).price ?? 0;
  });

  return (
    <div className="w-[90%] md:container mx-auto pt-[100px] mb-[60px]">
      <div className="text-black text-[45px] leading-[50px] text-center mt-[30px]">
        View Challanges
      </div>
      <div className="w-[90%] md:container justify-center mx-auto pt-[60px] gap-x-[20px] gap-y-[60px] my-[60px] border-[1px] rounded-[6px]">
        {usedCards.map((card: number, index: number) => (
          <CartComponent
            card={cards.find((item) => item.id === card)}
            usedCards={usedCards}
            setUsedCards={setUsedCards}
            key={index}
          />
        ))}
      </div>
      <div className="text-black text-[25px] leading-[30px] text-right mt-[30px]">
        Total Number of Items: {usedCards.length}
      </div>
      <div className="text-black text-[25px] leading-[30px] text-right mt-[30px]">
        Total Cost: ${totalPrice}
      </div>
      <div className="text-right mt-[30px]">
        <PrimaryButton disabled={totalPrice === 0} onClick={() => {}}>
          {totalPrice === 0
            ? "Please add items to your cart"
            : "Proceed to checkout"}
        </PrimaryButton>
      </div>
    </div>
  );
}
