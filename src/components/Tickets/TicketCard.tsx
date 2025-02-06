import { useAppContext } from "@/contexts";
import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";

export default function TicketCard() {
  const { tickets, persons } = useAppContext();

  return (
    <>
      <div className="flex gap-2 bg-slate-900 rounded-lg p-2 w-min items-center text-white">
        <div className="flex-center flex-col justify-between">
          <Image
            src={getBaseUrl(
              "/assets/images/imagem-do-usuario-com-fundo-preto.png"
            )}
            alt="Imagem do usuário"
            width={50}
            height={50}
          />

          <h4 className="text-xl font-bold">{persons[0].name}</h4>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">Status:</span>
              <span className="text-sm">{tickets[0].status}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">Prioridade:</span>
              <span className="text-sm">{tickets[0].priority}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full min-w-64">
          <h3 className="text-2xl font-bold">{tickets[0].type}</h3>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <h5 className="text-lg font-semibold">Colaborador:</h5>
              <h5 className="text-lg">{tickets[0].collaborators_id}</h5>
            </div>
            <div className="flex gap-4">
              <h5 className="text-lg font-semibold">Usuario:</h5>
              <h5 className="text-lg"> {tickets[0].users_id} </h5>
            </div>
            <div className="flex gap-4">
              <h5 className="text-lg font-semibold">Setor:</h5>
              <h5 className="text-lg">{tickets[0].department_id}</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between whitespace-nowrap">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">Iniciada:</span>
              <span className="text-sm">{tickets[0].created_at}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">Ultima atualização:</span>
              <span className="text-sm">{tickets[0].updated_at}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-col bg-slate-900 rounded-lg p-4 text-white">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">The computer is not turning on.</h3>
        <span className="text-xl font-bold">High</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Opened at:</span>
            <span className="text-lg">2021-10-10 10:00</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Updated at:</span>
            <span className="text-lg">2021-10-10 10:00</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Status:</span>
            <span className="text-lg">Open</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Priority:</span>
            <span className="text-lg">High</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Description:</span>
          <span className="text-lg">
            The computer is not turning on. The computer is not turning on.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Attachments:</span>
          <div className="flex gap-2">
            <img
              src="/images/screenshot1.png"
              alt="Screenshot 1"
              className="w-16 h-16"
            />
            <img
              src="/images/screenshot2.png"
              alt="Screenshot 2"
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}
