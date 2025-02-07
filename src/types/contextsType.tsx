import { PersonType } from "./personType";

interface AppContextType {
  persons: PersonType[];
  setPersons: (person: PersonType[]) => void;
}

interface departmentType {
  id: number;
  name: string;
}

export type { AppContextType, departmentType };
