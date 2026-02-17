import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import MusicStaff from "./music-staff";

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
    <main className="relative w-screen min-h-screen py-20 px-3 lg:px-6 bg-[#F3F3F3] text-black flex lg:flex-row flex-col">
      <Button
        asChild
        variant="link"
        className="top-0 right-0 absolute w-fit h-fit text-sm lg:hidden"
      >
        <Link href="/">Back</Link>
      </Button>
      {/* Left Column */}
      <div className="w-full">
        <header className="sticky top-28 self-start w-full h-fit lg:px-2">
          <h1 className="w-full mb-4">{title}</h1>
          <p className="body-1 w-full">{subtitle}</p>
        </header>
      </div>

      <div className="fixed top-1/3">
        <MusicStaff/>
      </div>

      {/* Main content */}
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8 z-10 bg-[#F3F3F3]">
        {children}
        <div className="flex place-content-end items-center w-full gap-2">
          <Image
            src="/icons/coda.svg"
            width={30}
            height={30}
            alt="Hover Image"
          />
          <span className="sheet-notes">Coda</span>
        </div>
      </section>

      {/* Right Column */}
      <div className="w-full hidden lg:block relative">
        <div className="sticky top-6">
          <Button
            asChild
            variant="link"
            className="w-fit h-fit text-md"
          >
            <Link href="/">Back</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
