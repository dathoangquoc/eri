import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ProjectPageLayout({
  title,
  subtitle,
  children,
}: ProjectPageLayoutProps) {
  return (
    <main className="relative w-screen min-h-screen py-20 px-3 lg:px-6 bg-white text-black flex lg:flex-row flex-col no-scrollbar">
      <Button
        asChild
        variant="link"
        className="top-0 right-0 absolute w-fit h-fit text-sm lg:hidden"
      >
        <Link href="/">Back</Link>
      </Button>
      {/* Left Column */}
      <div className="w-full">
        <header className="sticky top-20 self-start w-full h-fit lg:px-2">
          <h1 className="w-full mb-4">{title}</h1>
          <p className="body-1 w-full">{subtitle}</p>
        </header>
      </div>

      {/* Main content */}
      {children}

      {/* Right Column */}
      <div className="w-full hidden lg:block">
        <Button
          asChild
          variant="link"
          className="sticky top-20 self-start w-full h-fit text-md my-3.5 mx-6"
        >
          <Link href="/">Back</Link>
        </Button>
      </div>
    </main>
  );
}
