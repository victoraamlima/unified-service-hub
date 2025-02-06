import { PersonType } from "./personType";

interface AppContextType {
  persons: PersonType[];
  setPersons: (person: PersonType[]) => void;
}

export type { AppContextType };
