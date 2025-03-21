import iconsSvg from "@/json/iconsSvg.json";
import ButtonMenu from "./ButtonsMenu";
import { useState } from "react";
import { useAppContext } from "@/contexts";

export default function Menu() {
  const { menuStatus } = useAppContext();

  return (
    <nav
      className={`flex flex-col justify-start transition-all self-center
      ${menuStatus.status === "close" ? "gap-2" : "gap-4"}
    `}
    >
      {Object.values(iconsSvg).map((button) => (
        <ButtonMenu
          key={button.name}
          data={button}
        />
      ))}
    </nav>
  );
}
