import BgMainPanel from "@/components/BgMainPanel";
import TicketHome from "../../components/Tickets/TicketHome";
import Header from "@/components/Dashboard/Header";

export default function Atendimento() {
  return (
    <main className="flex min-h-screen">
      <Header />

      <BgMainPanel>
        <TicketHome />
      </BgMainPanel>
    </main>
  );
}
