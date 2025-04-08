import TicketCards from "@/components/Tickets/Card/TicketCards";
import Button from "../Button/Button";
import { useState } from "react";
import Form from "../Form/Form";
import LabelInputForm from "../Form/LabelInputForm";
import LabelSelectForm from "../Form/LabelSelectForm";
import MiniCard from "./Card/MiniCard";
import LabelTextAreaForm from "../Form/LabelTextAreaForm";

export default function TicketHome() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPersons, setSelectedPersons] = useState<string[]>([]);

  const getPerson = () => {
    const person = document.getElementById("Pessoa") as HTMLInputElement;

    return person.value;
  };

  return (
    <div className="flex flex-col gap-6 justify-between h-full p-5">
      <header className="flex-center flex-col gap-4">
        <h2 className="text-6xl font-bold text-white1">Atendimento</h2>

        <Button
          onClick={() => {}}
          name="novo atendimento +"
          type="button"
          width="w-fit"
          style="style-2"
        />
      </header>

      <Form>
        <h3 className="text-xl text-black2 font-semibold self-center">
          Novo Atendimento
        </h3>
        <div className="flex-wrap flex-center gap-9">
          <LabelInputForm label="Usuário" type="text" />

          <LabelInputForm
            label="Colaborador"
            type="text"
            placeHolder="Digite o nome do Colaborador "
          />

          <LabelInputForm
            label="Motivo"
            type="text"
            placeHolder="Digite o motivo do atendimento "
          />

          <LabelSelectForm
            label="Prioridade"
            options={["Alta", "Media", "Baixa"]}
          />
        </div>

        <div className="flex justify-center items-end gap-9">
          <LabelInputForm
            label="Pessoa"
            type="text"
            placeHolder="Digite o nome da pessoa "
          />

          <Button
            onClick={() => {
              setSelectedPersons([...selectedPersons, getPerson()]);
            }}
            name="Adicionar"
            type="button"
            width="w-fit"
            style="style-1"
          />

          <Button
            onClick={() => {}}
            name="Nova Pessoa +"
            type="button"
            width="w-fit"
            style="style-1"
          />
        </div>

        {selectedPersons.length > 0 && (
          <div className="flex-center gap-2">
            {selectedPersons.map((person, index) => (
              <MiniCard person={person} />
            ))}
          </div>
        )}

        <div className="flex w-full justify-center items-end gap-9">
          <LabelTextAreaForm label="Descrição" />
        </div>
      </Form>

      <TicketCards />
    </div>
  );
}
