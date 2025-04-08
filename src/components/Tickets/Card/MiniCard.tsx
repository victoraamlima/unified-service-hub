import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";

interface MiniCardProps {
  person: string;
}

export default function MiniCard({ person }: MiniCardProps) {
  return (
    <div className="bg-blue2 flex items-center gap-1 p-1 rounded-lg min-w-24">
      <Image
        src={getBaseUrl("/assets/images/profile-demo.png")}
        alt="Imagem do usuário"
        width={160}
        height={160}
        className="w-10 h-10 rounded-lg object-cover "
      />

      <h5 className="text-xs font-semibold max-w-20">{person}</h5>
    </div>
  );
}
