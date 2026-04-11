import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* <SessionProvider> */}
        <main className="">{children}</main>
        <div>this is my test project.</div>
        {/* </SessionProvider>  */}
      </body>
    </html>
  );
}
