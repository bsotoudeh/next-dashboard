import "@/globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Product Dashboard – Admin Panel",
  description: "Manage your products, view stats, and create new entries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-black flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 bg-zinc-50 dark:bg-black p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
