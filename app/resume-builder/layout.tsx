import { Navbar } from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen scroll-smooth">
      <Navbar />
      {children}
    </div>
  );
}
