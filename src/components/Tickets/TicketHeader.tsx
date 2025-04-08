import Button from "../Button/Button";

export default function TicketHeader() {
  return (
    <header className="flex-center flex-col gap-4">
      <h2 className="text-6xl font-bold text-white1">Atendimento</h2>

      {/* <nav className="flex-center flex-col gap-4"> */}
      {/* <Link href="/Dashboard/Ticket/NewTicket"> */}
      <Button
        onClick={() => {}}
        name="novo atendimento +"
        type="button"
        width="w-fit"
        style="style-2"
      />
      {/* </Link> */}
      {/* </nav> */}
    </header>
  );
}
