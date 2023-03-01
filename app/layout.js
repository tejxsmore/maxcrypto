import "./globals.css";

export const metadata = {
  title: "Crypto App",
  description: "Crypto exchangle price dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
