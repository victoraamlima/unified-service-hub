import Link from "next/link";
import colors from "@/json/themesColors.json";
import { useAppContext } from "@/contexts";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface ButtonMenuProps {
  data: {
    name: string;
    route: string;
    width: string;
    height: string;
    viewBox: string;
    path: string;
  };
}

export default function ButtonMenu({ data }: ButtonMenuProps) {
  const { menuStatus, setMenuStatus } = useAppContext();
  const { name, route, width, height, viewBox, path } = data;

  const isClose = menuStatus.status === "close";
  const isActive = menuStatus.select === name;

  const router = useRouter();
  const page = router.route.split("/")[2];

  useEffect(() => {
    setMenuStatus({
      status: menuStatus.status,
      select: page,
    });
  }, [page]);

  return (
    <Link
      href={`/Dashboard/${route}`}
      type="button"
      className={`flex items-center justify-start relative
         ${isActive && !isClose && "my-2"}
         ${isClose ? "gap-1" : "gap-3"}
          `}
      onClick={() => setMenuStatus({ status: menuStatus.status, select: name })}
    >
      <div
        className={`w-7 h-7 shadow-sm shadow-black1 rounded-xl flex-center ${
          isActive ? "bg-blue5" : "bg-white1"
        }`}
      >
        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          fill={isActive ? colors.white1 : colors.blue5}
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{ __html: path }}
        />
      </div>

      <span
        className={`text-sm font-bold transition-all overflow-hidden ${
          isActive && "text-blue5"
        }
          ${isClose ? "w-0" : "w-fit"}
        `}
      >
        {name}
      </span>

      <div
        className={`${
          isActive &&
          "w-40 h-12 absolute -z-10 -left-3 bg-white1 rounded-2xl shadow-black1 shadow-md transition-all"
        }
            ${isClose && "hidden"}
              `}
      />
    </Link>
  );
}
