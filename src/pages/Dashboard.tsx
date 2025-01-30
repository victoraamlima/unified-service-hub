import TicketHome from "@/components/Ticket";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <header>
        <div>
          <nav>
            <ul>
              <li>ticket</li>
              <li>Cadastros</li>
              <li>Calendario</li>
            </ul>
          </nav>
        </div>
      </header>
      <TicketHome />
    </>
  );
}
