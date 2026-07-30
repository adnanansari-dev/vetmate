export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <h1 className="text-2xl font-bold">REON</h1>

      <ul className="flex gap-8">
        <li>Features</li>
        <li>AI Insights</li>
        <li>How It Works</li>
      </ul>

      <button>Get Started</button>
    </nav>
  );
}