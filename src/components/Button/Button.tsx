import { useAppDesignContext } from "@/contexts/design";

interface ButtonProps {
  onClick: () => void;
  name: string;
  type: "button" | "submit" | "reset";
  width: string;
}

export default function Button({ onClick, name, type, width }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`self-center ${width} uppercase h-12 rounded-2xl text-white font-bold text-sm bg-blue5 hover:bg-blue4 text-white1 easy-in-out duration-100`}
      type={type}
    >
      {name}
    </button>
  );
}
