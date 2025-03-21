import Image from "next/image";
import Menu from "../Menu/HeaderMenu";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { useAppContext } from "@/contexts";

export default function Header() {
  const { menuStatus, setMenuStatus } = useAppContext();

  return (
    <header
      className={`relative flex items-start flex-col gap-4 pt-3 transition-all ${
        menuStatus.status === "close" ? "p-3 pr-0" : "pl-3"
      }`}
    >
      <div className={`flex items-center gap-2`}>
        <Image
          src={getBaseUrl("/assets/images/BRASAO-ALEPA-2.png")}
          width={3762}
          height={1850}
          alt="Brasão da ALEPA"
          className="w-10"
        />

        <h2
          className={`text-xl text-blue3 font-bold whitespace-nowrap transition-all overflow-hidden ${
            menuStatus.status === "close" ? "w-0" : "w-36"
          }`}
        >
          Zeca Pirão
        </h2>
      </div>

      <button
        className={`absolute top-12 z-10 -right-6 transition-all bg-white2 p-1 rounded-md ${
          menuStatus.status === "close" && "transform rotate-180"
        }`}
        onClick={() =>
          setMenuStatus(
            menuStatus.status === "open"
              ? { status: "close", select: menuStatus.select }
              : { status: "open", select: menuStatus.select }
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            stroke="#545759"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M13.25 2.5v12M10.25 8.5h-7.5M7.125 5.375 10.25 8.5l-3.125 3.125"
          />
        </svg>
      </button>

      <Menu />
    </header>
  );
}
