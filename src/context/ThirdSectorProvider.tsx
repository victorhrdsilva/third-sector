import React, { useState } from "react";
import { useMemo } from "react";
import { MainContext } from "./MainContext";

type Props = {
  children: JSX.Element;
}

export default function ThirdSectorProvider({ children }: Props) {
  const [adress, setAdress] = useState<string[]>([]);

  const value = useMemo(() => ({
    adress: adress, // Define o tipo como string[]
    setAdress: setAdress as React.Dispatch<React.SetStateAction<string[]>> // Define o tipo do setter
  }), [adress, setAdress]);

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}
