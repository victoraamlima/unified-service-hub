import { useAppDesignContext } from "@/contexts/design";

interface LabelInputProps {
  label: string;
  type: string;
  placeHolder?: string;
}

export default function LabelForm({
  label,
  type,
  placeHolder,
}: LabelInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-sm ml-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        className={`border h-12 rounded-2xl w-80 px-4 placeholder:text-blue6 max-2sm:w-60 border-black3`}
        placeholder={placeHolder}
      />
    </div>
  );
}
