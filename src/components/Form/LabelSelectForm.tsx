import { useAppDesignContext } from "@/contexts/design";

interface LabelSelectProps {
  label: string;
  options: string[];
}

export default function LabelSelectForm({ label, options }: LabelSelectProps) {
  return (
    <div className="flex flex-col gap-1 font-medium">
      <label htmlFor={label} className="text-sm ml-1">
        {label}
      </label>

      <select className={`border h-12 rounded-2xl px-4 border-black3 `}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
