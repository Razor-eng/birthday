import "./globals.css";

export const metadata = {
  title: "Rajat Kumar Maharana",
  description: "Portfolio created by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
