import iconsSvg from "@/json/iconsSvg.json";
import ButtonMenu from "./ButtonsMenu";
import { useState } from "react";
import { useAppContext } from "@/contexts";

export default function Menu() {
  const [select, setSelect] = useState("Home");
  const { menuStatus } = useAppContext();

  return (
    <nav
      className={`flex flex-col justify-start
      ${menuStatus === "open" ? "gap-2" : "gap-4"}
    `}
    >
      {Object.values(iconsSvg).map((button) => (
        <ButtonMenu
          key={button.name}
          data={button}
          state={{ select, setSelect }}
        />
      ))}
    </nav>
  );
}
