import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFBFC] flex items-center justify-center">
        <h1 className="text-6xl font-bold text-[#0F3D5E]">
          REON
        </h1>
      </main>
    </>
  );
}