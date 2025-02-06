import Header from "@/components/Dashboard/Header";
import TicketCards from "@/components/Tickets/TicketCards";
import Link from "next/link";

export default function Ticket() {
  return (
    <main className="flex">
      <Header />

      <section className="container gap-6 justify-center ">
        <header className="flex-center gap-4 py-4 border-b-2 w-full border-slate-700">
          <h2 className="text-6xl font-bold">Ticket</h2>
          <nav className="flex-center flex-col gap-4">
            <Link href="/Dashboard/Ticket/NewTicket">
              <button className="button">Novo</button>
            </Link>
            {/* <button className="button">Acompanhar</button> */}
          </nav>
        </header>
        <TicketCards />
      </section>
    </main>
  );
}
