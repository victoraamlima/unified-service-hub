import { useAppContext } from "@/contexts";
import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";
import TicketCardSection from "./TicketCardSection";

export default function TicketCard() {
  const { tickets, persons } = useAppContext();

  return (
    <>
      <div className="flex flex-col gap-3 bg-white1 rounded-2xl p-2  items-center w">
        <div className="flex gap-3 items-center">
          <Image
            src={getBaseUrl("/assets/images/profile-demo.png")}
            alt="Imagem do usuário"
            width={160}
            height={160}
            className="w-20 h-20 rounded-2xl object-cover "
          />

          <div className="flex flex-col gap-1 w-32">
            <h4 className="text-base font-black">{persons[0].name}</h4>

            <TicketCardSection
              name="Colaborador"
              data={tickets[0].collaborators_id}
            />

            <TicketCardSection name="Usuario" data={tickets[0].users_id} />
          </div>

          <div className="flex flex-col gap-2 justify-between w-44 items-center">
            <h5 className="text-base font-semibold">{tickets[0].type}</h5>

            <TicketCardSection name="Setor" data={tickets[0].department_id} />
          </div>

          <div className="flex flex-col gap-4">
            <span
              className={`w-5 h-5 rounded-full ${
                tickets[0].status === "Aberto"
                  ? "bg-green1"
                  : tickets[0].status === "Fechado"
                  ? "bg-red1"
                  : tickets[0].status === "Retorno marcado"
                  ? "bg-orange1"
                  : tickets[0].status === "Esperando retorno"
                  ? "bg-yellow1"
                  : "bg-gray1"
              }`}
            />

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${
                tickets[0].priority === "Alta"
                  ? "-rotate-90"
                  : tickets[0].status === "Baixa" && "rotate-90"
              }`}
            >
              <path
                d="M2 16H30M30 16L16 2M30 16L16 30"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <TicketCardSection
            name="Iniciada"
            data={tickets[0].created_at}
            // direction="column"
          />

          <TicketCardSection
            name="Ultima atualização"
            data={tickets[0].created_at}
            // direction="column"
          />
        </div>
      </div>
    </>
  );
}
