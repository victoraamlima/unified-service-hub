import { PersonType } from "@/types/personType";

export type TicketType = {
  id: number;
  created_at: string;
  person_id: number;
  type: string;
  description: string;
  attachments: string[];
  status: string;
  priority: string;
  collaborators_id: string;
  users_id: string;
  updated_at: string[];
  department_id: string;
};

export type DepartmentType = {
  id: number;
  name: string;
};

export type AppContextType = {
  persons: PersonType[];
  setPersons: (persons: PersonType[]) => void;
  tickets: TicketType[];
  setTickets: (tickets: TicketType[]) => void;
  departments: DepartmentType[];
  setDepartments: (departments: DepartmentType[]) => void;
};
