import { useState } from "react";
import TicketCard from "./TicketCard";
import TicketEdit from "./TicketEdit";

export default function TicketCards() {
  const [ticketsEditOpen, setTicketsEditOpen] = useState(false);

  const handleEdit = () => {
    setTicketsEditOpen(!ticketsEditOpen);
  };

  return (
    <section className="container gap-6 justify-center">
      {ticketsEditOpen && <TicketEdit />}

      <button onClick={handleEdit}>
        <TicketCard />
      </button>
    </section>
  );
}
