import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ toggleSidebar }) {

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/add-product", label: "Add Product" },
    { href: "/products", label: "Products" },
  ];

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
        <nav className="flex space-x-4">
          <ThemeToggle />
          {links.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-md font-medium
                  transition-all cursor-pointer
                  hover:bg-blue-800 dark:hover:bg-blue-800
                  ${
                    active
                      ? "bg-blue-800 text-white"
                      : "text-gray-100 dark:text-gray-300"
                  }
                `}
                onClick={() => toggleSidebar && toggleSidebar()}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
