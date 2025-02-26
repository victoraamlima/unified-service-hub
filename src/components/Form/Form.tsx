export default function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex flex-col gap-10 bg-white1 p-11 rounded-xl shadow-xl max-2sm:p-6 max-2sm:gap-6">
      {children}
    </form>
  );
}
