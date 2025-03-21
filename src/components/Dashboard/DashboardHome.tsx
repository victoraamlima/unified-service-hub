import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";
import BgMainPanel from "../BgMainPanel";

export default function DashboardHome() {
  return (
    <BgMainPanel>
      <div className="w-full flex-center flex-col justify-center gap-5 transition-all">
        <Image
          width={3762}
          height={1850}
          src={getBaseUrl("/assets/images/BRASAO-ALEPA.png")}
          alt="Brasão da ALEPA"
          className="w-96"
        />

        <div className="flex-center flex-col gap-4 text-white">
          <p className="text-2xl">Gabinete do Deputado Estadual</p>
          <h2 className="text-4xl font-semibold">Zeca Pirão</h2>
        </div>
      </div>
    </BgMainPanel>
  );
}
