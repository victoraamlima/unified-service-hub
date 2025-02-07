import { useAppContext } from "@/contexts";
import TicketCard from "./TicketCard";
import { useState } from "react";
import { DepartmentType } from "@/types/contextsType";

export default function TicketEdit() {
  const { departments } = useAppContext();
  const [status, setStatus] = useState("open");

  // const saveTicket = () => {
  //   const description = (
  //     document.getElementById("description") as HTMLTextAreaElement
  //   )?.value;
  //   const attachmentDescription = (
  //     document.getElementById("attachment-description") as HTMLInputElement
  //   )?.value;
  //   const status = (
  //     document.getElementById("status-ticket") as HTMLSelectElement
  //   )?.value;
  //   const resolved = (
  //     document.querySelector(
  //       'input[name="resolved"]:checked'
  //     ) as HTMLInputElement
  //   )?.value;
  //   const scheduleDate = (
  //     document.querySelector('input[type="date"]') as HTMLInputElement
  //   )?.value;
  //   const scheduleTime = (
  //     document.querySelector('input[type="time"]') as HTMLInputElement
  //   )?.value;
  // }; 

  return (
    <div className="flex flex-col gap-4 bg-slate-100 p-2 rounded-lg">
      <TicketCard />

      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          className="input"
        ></textarea>
      </div>

      <div className="form-group flex-col">
        <h3 className="text-lg font-semibold">Anexos</h3>

        <div className="flex-center flex-col gap-4">
          <input type="file" />

          <input
            type="text"
            name="attachment-description"
            id="attachment-description"
            className="input"
            placeholder="Nome do documento"
          ></input>

          <button className="button">Adicionar</button>
        </div>
      </div>

      <div className="flex-center gap-4">
        <h5 className="text-lg font-semibold">Setor:</h5>
        <select className="input">
          {departments.map((department: DepartmentType) => (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-center flex-col gap-4">
        <h5 className="text-lg font-semibold">Status:</h5>
        <select
          id="status-ticket"
          className="input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="open">Aberto</option>
          <option value="close">Fechado</option>
          <option value="wait-return">Esperar retorno</option>
          <option value="schedule-return">Marcar retorno</option>
        </select>

        {status === "close" && (
          <div className="flex-center gap-4">
            <h5 className="text-lg font-semibold">
              O motivo do atendimento foi resolvido?
            </h5>
            <input type="radio" name="resolved" value="yes" />
            <label htmlFor="yes">Sim</label>
            <input type="radio" name="resolved" value="no" />
            <label htmlFor="no">Não</label>
          </div>
        )}

        {status === "schedule-return" && (
          <div className="flex-center gap-4">
            <h5 className="text-lg font-semibold">Data de retorno:</h5>
            <input type="date" />
            <input type="time" />
          </div>
        )}
        {status === "wait-return" && (
          <div className="flex-center gap-4">
            <h5 className="text-lg font-semibold">Prazo para retornar</h5>
            <input type="date" />
            <input type="time" />
          </div>
        )}

        <button className="button">Salvar</button>
      </div>
    </div>
  );
}

// console.log((document.getElementById("status-ticket") as HTMLSelectElement)?.value);
