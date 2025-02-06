import { PersonType } from "@/types/personType";
import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";

export default function PersonCard({ person }: { person: PersonType }) {
  return (
    <div className="flex-center flex-col mb-2">
      <h3 className="header">Pessoa</h3>
      <div className="card flex-center gap-4">
        <Image
          src={getBaseUrl("/assets/images/imagem-do-usuario-com-fundo-preto.png")}
          alt=""
          width={50}
          height={50}
        />
        <h3>{person.name}</h3>
      </div>
    </div>
  );
}
