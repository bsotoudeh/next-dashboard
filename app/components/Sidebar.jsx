"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/add-product", label: "Add Product" },
    { href: "/products", label: "Products" },
  ];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Menu
      </h2>

      <nav className="flex flex-col gap-2">
        {links.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                px-4 py-2 rounded-md font-medium
                transition-all
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
