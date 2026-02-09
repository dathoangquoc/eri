import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/section-heading";

export default function PersonalWorksPage() {
  return (
    <main className="relative w-screen min-h-screen py-20 px-6 bg-white text-black flex lg:flex-row flex-col">
      <Button
        asChild
        variant="link"
        className="top-0 right-0 absolute w-fit h-fit text-md lg:hidden"
      >
        <Link href="/">Back</Link>
      </Button>
      {/* Left Column */}
      <div className="w-full">
        <header className="sticky top-20 self-start w-full h-fit px-2">
          <h1 className="w-full mb-4">Personal pieces</h1>
          <p className="body-1 w-full">[MIXED MEDIA, POETRY]</p>
        </header>
      </div>

      {/* Main content */}
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8">
        {/* Main image */}
        <div>
          <p className="flex justify-between">
            Hội An - Cut-out poetry from a travel magazine
            <span>Sep 2025</span>
          </p>
          <Image
            src="/personal/main.png"
            alt="cut out poetry from a travel magazine"
            width={1134}
            height={756}
          />
        </div>

        <p className="flex justify-between pt-12 lg:pt-24">
          Tems’ Concert: Mixed-media short created from phone-shot footage
          <span>Jan 2025</span>
        </p>
        <video
          src="/personal/1.webm"
          className="w-full h-auto block object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

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

      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </main>
  );
}
