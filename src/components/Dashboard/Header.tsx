import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center flex-col p-4 gap-4">
      <h1 className="text-3xl">Dashboard</h1>
      <div>
        <nav className="flex flex-col gap-4">
          <Link href="/Dashboard/Ticket/TicketHome">
            <button className="button text-center w-full">Ticket</button>
          </Link>
          {/* <Link href="/cadastros"> */}
            <button className="button text-center w-full">Cadastros</button>
          {/* </Link> */}
          {/* <Link href="/calendario"> */}
            <button className="button text-center w-full">Calendário</button>
            <button className="button text-center w-full">Financeiro</button>
          {/* </Link> */}
        </nav>
      </div>
    </header>
  );
}
