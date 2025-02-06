import DashboardHome from "@/components/Dashboard/DashboardHome";
import Header from "@/components/Dashboard/Header";

export default function Dashboard() {
  return (
    <main className="flex">
      <Header />

      <DashboardHome />
    </main>
  );
}
