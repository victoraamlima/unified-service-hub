// import { AppContextType } from "@/types/contextsType";
import { PersonType } from "@/types/personType";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [persons, setPersons] = useState<PersonType[]>([
    {
      id: 1,
      name: "João da Silva",
      email: "testuser@example.com",
      cpf: "123.456.789-00",
      birth_date: "2000-01-01",
      gender: "male",
      cell_phone: "(11) 91234-5678",
      state: "SP",
      city: "São Paulo",
      neighborhood: "Centro",
      street: "Rua Teste",
      number: "123",
      zip_code: "01000-000",
      complement: "Apto 101",
      reference_point: "Próximo ao metrô",
      observations: "Nenhuma observação",
    },
  ]);

  const [tickets, setTickets] = useState<any[]>([
    {
      id: 1,
      created_at: "2021-10-10 10:00",
      person_id: 1,
      type: "Precisa de cirurgia no olho",
      description: "The computer is not turning on.",
      attachments: ["screenshot1.png", "screenshot2.png"],
      status: "Aberto",
      priority: "Alta",
      collaborators_id: "Celia",
      users_id: "Patricia",
      updated_at: [new Date().toISOString()],
      department_id: "Saúde",
    },
    {
      id: 2,
      created_at: "2021-10-10 10:00",
      person_id: 1,
      type: "Precisa de cirurgia no olho",
      description: "The computer is not turning on.",
      attachments: ["screenshot1.png", "screenshot2.png"],
      status: "Aberto",
      priority: "Alta",
      collaborators_id: "Celia",
      users_id: "Patricia",
      updated_at: "2021-10-10 10:00",
      department_id: "Saúde",
    },
    {
      id: 3,
      created_at: "2021-10-10 10:00",
      person_id: 1,
      type: "Precisa de cirurgia no olho",
      description: "The computer is not turning on.",
      attachments: ["screenshot1.png", "screenshot2.png"],
      status: "Aberto",
      priority: "Alta",
      collaborators_id: "Celia",
      users_id: "Patricia",
      updated_at: "2021-10-10 10:00",
      department_id: "Saúde",
    }
  ]);

  const [departments, setDepartments] = useState<any[]>([
    {
      id: 1,
      name: "Saúde",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        persons,
        setPersons,
        tickets,
        setTickets,
        departments,
        setDepartments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
