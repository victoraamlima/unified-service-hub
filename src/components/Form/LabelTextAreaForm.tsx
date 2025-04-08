interface LabelTextAreaProps {
  label: string;
  placeHolder?: string;
}

export default function LabelTextAreaForm({
  label,
  placeHolder,
}: LabelTextAreaProps) {
  return (
    <div className="flex-center flex-col w-full gap-1 font-medium">
      <label htmlFor={label} className="text-sm ml-1">
        {label}
      </label>

      <textarea
        id={label}
        name={label}
        className={`border h-28 rounded-2xl w-2/3 px-4 placeholder:text-blue6 max-2sm:w-60 border-black3`}
        placeholder={placeHolder}
      />
    </div>
  );
}
