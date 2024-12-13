import "./globals.css";

export const metadata = {
  title: "Happy Birthday",
  description: "Birthday page created by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
