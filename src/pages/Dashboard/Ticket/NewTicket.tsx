import { useState } from "react";
import { PersonType } from "@/types/personType";
import NewPerson from "@/components/Persons/NewPerson";
import PersonCard from "@/components/Persons/PersonCard";
import Header from "@/components/Dashboard/Header";
import { useAppContext } from "@/contexts";
import { useRouter } from "next/router";

export default function NewTicket() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState<PersonType[]>([]);

  const { persons, setPersons } = useAppContext();
  // const { tickets, setTickets } = useAppContext();

  // let person: [PersonType] = [
  //   {
  //     id: 1,
  //     name: "João da Silva",
  //     email: "testuser@example.com",
  //     cpf: "123.456.789-00",
  //     birth_date: "2000-01-01",
  //     gender: "male",
  //     cell_phone: "(11) 91234-5678",
  //     state: "SP",
  //     city: "São Paulo",
  //     neighborhood: "Centro",
  //     street: "Rua Teste",
  //     number: "123",
  //     zip_code: "01000-000",
  //     complement: "Apto 101",
  //     reference_point: "Próximo ao metrô",
  //     observations: "Nenhuma observação",
  //   },
  // ];

  const handleAddPersonClick = () => {
    setShowForm(!showForm);
  };

  const router = useRouter();

  const goToTicketHome = () => {
    router.push("/Dashboard/Ticket/TicketHome");
  };

  const addSelectedPerson = () => {
    const selected = persons.find(
      (p: PersonType) =>
        p.name === (document.getElementById("person") as HTMLInputElement).value
    );
    if (selected) {
      setSelectedPersons([...selectedPersons, selected]);
    }
  };

  // const savePerson = () => {
  //   persons.map((p: PersonType) => {
  //     if (p.name === selectedPersons[0].name) {
  //       return;
  //     } else {
  //       setPersons([...persons, selectedPersons[0]]);
  //     }
  //   });
  // };

  // const saveTicket = () => {
  //   const ticket = {
  //     id: tickets.length + 1,
  //     created_at: new Date().toISOString(),
  //     person_id: selectedPersons[0].id,
  //     type: (document.getElementById("type") as HTMLInputElement).value,
  //     description: (document.getElementById("description") as HTMLInputElement)
  //       .value,
  //     attachments: [],
  //     status: "",
  //     priority: "",
  //     collaborators_id: (
  //       document.getElementById("collaborator") as HTMLSelectElement
  //     ).value,
  //     users_id: (document.getElementById("user") as HTMLSelectElement).value,
  //     updated_at: [new Date().toISOString()],
  //     department_id: "0",
  //   };

  //   savePerson();

  //   setTickets([...tickets, ticket]);
  // };

  return (
    <main className="flex">
      <Header />

      <section className="w-full container">
        <h2 className="text-4xl mb-4 font-bold">Novo Ticket</h2>

        <div className="bg-white p-5 rounded-lg shadow-md relative">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <select name="user" id="user" className="input">
              <option value="John Doe">John Doe</option>
              <option value="Jane Doe">Jane Doe</option>
              <option value="John Smith">John Smith</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="person">Pessoa</label>
            <input
              list="Persons"
              type="search"
              name="person"
              id="person"
              className="input"
            />
            <datalist id="Persons">
              {persons.map((person: PersonType) => (
                <option key={person.id} value={person.name} />
              ))}
            </datalist>

            <button onClick={addSelectedPerson} className="button">
              Adicionar
            </button>

            <button onClick={handleAddPersonClick} className="button">
              Nova pessoa +
            </button>
          </div>

          {showForm && (
            <div className="absolute bg-white p-5 rounded-lg shadow-md top-10 left-1/2 -translate-x-1/2 w-full flex flex-col align-bottom">
              <button
                onClick={handleAddPersonClick}
                className="button w-fit self-end"
              >
                X
              </button>
              <NewPerson />
            </div>
          )}

          {selectedPersons.length > 0 && (
            <PersonCard person={selectedPersons[0]} />
          )}

          <div className="form-group flex-col">
            <div className="form-group">
              <label htmlFor="type">Motivo</label>
              <input type="text" name="type" id="type" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                className="input"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="collaborator">Colaborador</label>
              <select name="collaborator" id="collaborator" className="input">
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="John Smith">John Smith</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Prioridade</label>
              <select name="priority" id="priority" className="input">
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </div>

            <button
              onClick={() => {
                // saveTicket();
                goToTicketHome();
              }}
              className="button"
            >
              Iniciar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
