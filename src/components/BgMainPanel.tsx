import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";
import { ReactNode } from "react";
import FloatingMenu from "./Menu/FloatingMenu";

interface BgMainPanelProps {
  children: ReactNode;
}

export default function BgMainPanel({ children }: BgMainPanelProps) {
  return (
    <section className="w-full h-full p-3">
      <div className="relative bg-blue5 rounded-xl flex-center w-full h-full">
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={getBaseUrl("/assets/images/pattern3.png")}
              alt="pattern"
              width={3240}
              height={1041}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <FloatingMenu />

        {children}
      </div>
    </section>
  );
}
