"use client";

import "@/globals.css";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex min-h-screen">
          <div
            className={`
              fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]
              bg-gray-200 dark:bg-gray-900 z-50
              transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:static md:translate-x-0 md:h-auto md:flex-shrink-0 md:transition-none
            `}
          >
            <Sidebar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          </div>

          <main className="flex-1 p-8 mt-0 md:mt-0 bg-zinc-50 dark:bg-black overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
