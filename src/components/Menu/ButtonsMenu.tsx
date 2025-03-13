import Link from "next/link";
import colors from "@/json/themesColors.json";
import { useAppContext } from "@/contexts";

interface ButtonMenuProps {
  data: {
    name: string;
    width: string;
    height: string;
    viewBox: string;
    path: string;
  };
  state: {
    select: string;
    setSelect: (value: string) => void;
  };
}

export default function ButtonMenu({ data, state }: ButtonMenuProps) {
  const { menuStatus } = useAppContext();

  return (
    <Link
      href="/Dashboard/Ticket/TicketHome"
      type="button"
      className={`flex gap-3 items-center justify-start relative ${
        state.select === data.name && menuStatus === "close" && "my-2"
      }`}
      onClick={() => state.setSelect(data.name)}
    >
      {state.select === data.name && menuStatus === "close" && (
        <div
          className={`${
            state.select === data.name &&
            "w-40 h-12 absolute -z-10 -left-3 bg-white1 rounded-2xl shadow-black1 shadow-md"
          }`}
        />
      )}

      <div
        className={`w-7 h-7 shadow-sm shadow-black1 rounded-xl flex-center ${
          state.select === data.name ? "bg-blue5" : "bg-white1"
        }`}
      >
        <svg
          width={data.width}
          height={data.height}
          viewBox={data.viewBox}
          fill={state.select === data.name ? colors.white1 : colors.blue5}
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{ __html: data.path }}
        />
      </div>

      {menuStatus === "close" && (
        <span
          className={`text-sm font-bold ease-in-out transition-all ${
            state.select === data.name && "text-blue5"
          }`}
        >
          {data.name}
        </span>
      )}
    </Link>
  );
}
