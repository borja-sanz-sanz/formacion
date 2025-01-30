import { createContext } from "react";

export const LevelContext = createContext(1)
export const SectionContext = createContext({level: 1, color: 'red'})