import AuthCard from "@/components/auth/AuthCard";

export default function AuthPageRoute() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <AuthCard />
    </div>
  );
}