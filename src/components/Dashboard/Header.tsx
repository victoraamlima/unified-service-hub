import Image from "next/image";
import Menu from "../Menu/Menu";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { useAppContext } from "@/contexts";

export default function Header() {
  const { menuStatus, setMenuStatus } = useAppContext();

  return (
    <header
      className={`relative flex items-center flex-col gap-4
        ${menuStatus === "open" ? "p-3 pt-6" : "p-4 pt-6 pr-7"}`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={getBaseUrl("/assets/images/BRASAO-ALEPA-2.png")}
          width={3762}
          height={1850}
          alt="Brasão da ALEPA"
          className="w-10"
        />

        {menuStatus === "close" && (
          <h2 className="text-xl text-blue3 font-bold w-28 whitespace-nowrap">
            Zeca Pirão
          </h2>
        )}
      </div>

      <button
        className={`absolute top-1 right-2 transition-all ${
          menuStatus === "close" && "transform rotate-180"
        }`}
        onClick={() => setMenuStatus(menuStatus === "open" ? "close" : "open")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            stroke="#545759"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M13.25 2.5v12M10.25 8.5h-7.5M7.125 5.375 10.25 8.5l-3.125 3.125"
          />
        </svg>
      </button>

      <Menu />
    </header>
  );
}
