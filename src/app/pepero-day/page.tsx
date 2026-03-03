import Image from "next/image";
import ProjectPageLayout from "@/components/project-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/section-heading";
import CircularGallery from "@/components/circular-gallery";

export default function PeperoPage() {
  return (
    <ProjectPageLayout
      title="11.11 is PEPERO Day"
      subtitle="[COMMUNICATION CAMPAIGN, OFFLINE ACTIVATION]"
      musicStaffLeft="Allegro"
      musicStaffRight="Oct - Nov 2025"
      musicStaffBpm={122}
    >
      <p>
        My first project in an IMC agency as an Account Intern was, fortunately,
        a fun and heartfelt one.
      </p>
      <p>
        I was asked: How to attach 11.11 to the public’s minds, just like the
        shape of the cookie itself?
      </p>
      {/* Main image */}
      <div className="pt-26">
        <p className="flex justify-between">
          <span className="body-1">15-day pop-up store</span>
          <span className="body-1">10,000 visitors</span>
        </p>
        <Image
          src="/pepero-day/main.png"
          alt="pepero day"
          width={1134}
          height={756}
        />
      </div>

      <SectionHeading
        title="Content Coordination"
        left={
          <span>
            100,000 <br className="hidden lg:block" /> engagements
          </span>
        }
        right="2.5M views"
      />

      <p className="description">
        The journey began by speaking the language of what the audience actually
        cared about: Stray Kids and “universe signs” for a weekend. I
        coordinated influencer content production, managing timelines, shaping
        creative hooks and angles, and guiding feedback to bring PEPERO’s
        vibrant, mischievous image to life.
      </p>

      <CircularGallery offsetY={200} spacing={100} bend={2}>
        <Image
          src="/pepero-day/tiktok-1.png"
          alt="pepero day"
          width={290}
          height={544}
        />
        <Image
          src="/pepero-day/tiktok-2.png"
          alt="pepero day"
          width={290}
          height={544}
        />
        <Image
          src="/pepero-day/tiktok-3.png"
          alt="pepero day"
          width={290}
          height={544}
        />
      </CircularGallery>
      
      <SectionHeading
        className="mt-0"
        title="Artist Coordination"
        left={
          <span>
            (S)TRONG <br /> Trong Hieu
          </span>
        }
        right={
          <span>
            Performance, <br className="hidden lg:block" /> Fansign
          </span>
        }
      />
      <p className="description">
        It culminated in a bang: an influential host advocating and leading the
        iconic “PEPERO Game.” I supported timeline management and coordinated
        artists’ accommodation and performances.
      </p>

      <Carousel className="w-full h-fit pb-8">
        <CarouselContent>
          <CarouselItem className="h-fit">
            <video
              src="/pepero-day/1.webm"
              className="w-full h-auto block object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </CarouselItem>
          <CarouselItem className="h-fit">
            <Image
              src="/pepero-day/2.png"
              alt="pepero day"
              width={1134}
              height={756}
            />
          </CarouselItem>
          <CarouselItem className="h-fit">
            <video
              src="/pepero-day/3.webm"
              className="w-full h-auto block object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </CarouselItem>
          <CarouselItem className="h-fit">
            <video
              src="/pepero-day/4.webm"
              className="w-full h-auto block object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>

      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </ProjectPageLayout>
  );
}
