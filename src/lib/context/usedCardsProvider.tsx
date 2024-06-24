"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext({
  usedCards: [],
  setUsedCards: (value: number[]) => {},
});

export const UsedCardsProvider = ({ children }: { children: any }) => {
  const [usedCards, setUsedCards] = useState<number[]>([]);

  return (
    <Context.Provider value={{ usedCards, setUsedCards }}>
      {children}
    </Context.Provider>
  );
};

export function useUsedCardsContext() {
  return useContext(Context);
}
