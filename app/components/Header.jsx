import ThemeToggle from "@/components/ThemeToggle";

export default function Header({ toggleSidebar }) {

  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="hidden md:block text-xl font-bold">My Admin Panel</h1>
        <button  className="block md:hidden z-[999999] relative w-10 h-10" onClick={() => toggleSidebar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
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
