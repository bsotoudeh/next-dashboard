import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Admin Panel</h1>
        <nav className="space-x-4">
            <ThemeToggle />
            <a href="/" className="hover:underline">Home</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
            <a href="/about" className="hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
}
