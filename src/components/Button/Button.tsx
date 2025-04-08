interface ButtonProps {
  onClick: () => void;
  name: string;
  type: "button" | "submit" | "reset";
  width: string;
  style: string;
}

export default function Button({
  onClick,
  name,
  type,
  width,
  style,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${width} uppercase h-12 rounded-2xl text-white font-bold text-sm transition-all px-6 ${
        style === "style-1"
          ? `bg-blue5 hover:bg-blue4 text-white1`
          : style === "style-2"
          ? `bg-white1 hover:bg-blue4 hover:text-white1 text-blue5`
          : style === "style-3"
          ? `bg-blue5 hover:bg-blue4 text-white1`
          : `bg-blue5 hover:bg-blue4 text-white1`
      }
        `}
      type={type}
    >
      {name}
    </button>
  );
}
