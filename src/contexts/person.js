import { createContext, useContext } from "react";

export const PersonContext = createContext({});

export const usePersonContext = () => useContext(PersonContext);
