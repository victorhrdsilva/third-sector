import { createContext } from "react";

type globalContext = {
  adress: string[];
  setAdress: (address: string[]) => void;
};

const MainContext = createContext({} as globalContext);

export { MainContext };
