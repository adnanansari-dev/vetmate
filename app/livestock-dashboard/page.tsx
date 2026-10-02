import { auth } from "@/auth";
import DashboardShell from "@/livestock/DashboardShell";
import AiChatHub from "@/livestock/AI/AiChatHub";

export default async function LivestockDashboard() {
  const session = await auth();

  return (
    <DashboardShell user={session?.user}>
      <AiChatHub />
    </DashboardShell>
  );
}