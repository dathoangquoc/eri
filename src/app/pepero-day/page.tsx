import Image from "next/image";
import ProjectPageLayout from "@/components/project-layout";
import SectionHeading from "@/components/section-heading";
import CircularGallery from "@/components/circular-gallery";
import Tiktok from "@/components/tiktok";

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
        <Tiktok
          src="/pepero-day/tiktok-1.png"
          alt="pepero day"
          text="@eveviday"
          href="https://www.tiktok.com/@eveviday/video/7571329855208377607"
          likes="18K"
          comments="108"
          saves="1500"
          views="276K"
        />
        <Tiktok 
          src="/pepero-day/tiktok-2.png"
          alt="pepero day"
          text="@cdqtit99"
          href="https://www.tiktok.com/@cdqtit99/video/7571422826020998418"
          likes="127K"
          comments="2287"
          saves="1384"
          views="762K"
        />
        <Tiktok
          src="/pepero-day/tiktok-3.png"
          alt="pepero day"
          text="@quynhsanhdieu"
          href="https://www.tiktok.com/@quynhsanhdieu/video/7571098773800160532"
          likes="19K"
          comments="234"
          saves="748"
          views="271K"
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

      <CircularGallery bend={1} spacing={80} offsetY={100}>
        <div className="aspect-square w-full overflow-hidden rounded-2xl">
          <video
            src="/pepero-day/1.webm"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src="/pepero-day/2.png"
            alt="pepero day"
            width={355}
            height={355}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square w-full overflow-hidden rounded-2xl">
          <video
            src="/pepero-day/3.webm"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="aspect-square w-full overflow-hidden rounded-2xl">
          <video
            src="/pepero-day/4.webm"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </CircularGallery>

    </ProjectPageLayout>
  );
}
