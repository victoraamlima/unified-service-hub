import DashboardHome from "@/components/Dashboard/DashboardHome";
import Header from "@/components/Dashboard/Header";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Header />

      <DashboardHome />
    </main>
  );
}