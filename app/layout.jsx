
import "@/globals.css";
import DefaultLayout from "@/components/DefaultLayout";
import { Providers } from "@/providers";

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <Providers>
          <DefaultLayout>{ children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
