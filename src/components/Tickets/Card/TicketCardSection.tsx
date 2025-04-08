interface TicketCardSectionProps {
  name: string;
  data: string;
  direction?: "column";
}

export default function TicketCardSection({
  name,
  data,
  direction,
}: TicketCardSectionProps) {
  return (
    <div className={`flex ${direction ? "flex-col" : "gap-1"}`}>
      <span className="text-sm font-bold">{name}:</span>
      <span className="text-sm">{data}</span>
    </div>
  );
}
