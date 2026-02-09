import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import ProjectPageLayout from "@/components/project-layout";

export default function BowenPage() {
  return (
    <ProjectPageLayout
      title="Bowen Street Press"
      subtitle="[COMMUNICATION CAMPAIGN]"
    >
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8">
        {/* Main image */}
        <div>
          <p className="body-1">
            In Melbourne’s competitive and rigid academic landscape, writing and
            publishing may not seem like the most attractive career path. We
            responded to this challenge by positioning Bowen Street Press as a
            human-centered, realistic teaching press, offering aspiring
            creatives a leverage through a network of talented alumni and
            industry connections.
          </p>
          <video
            src="/bowen/main.webm"
            className="w-full h-auto block object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <SectionHeading title="Campaign Video Production" />
        <p className="body-1">
          Based on the concept of tree vines connecting everybody everywhere
          together, I sum up the team’s communication strategy in an
          audio-visual work.
        </p>
        <iframe
          className="mx-auto w-full max-w-3xl aspect-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V0FCStHVsEo?si=I6Ee5-WkrkzyqKCw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <SectionHeading
          title="UI/UX Design"
          left="Web design chosen by client"
          right="Maintain the human-focused theme"
        />
        <video
          src="/bowen/1.webm"
          className="w-full h-auto block object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <Image
          src="/bowen/2.png"
          alt="bowen street press website design"
          width={1134}
          height={756}
        />

        <p className="body-1 pt-12 lg:pt-24">
          Hand drawn draft of the web idea on bread pack
        </p>
        <Image
          src="/bowen/3.png"
          alt="bowen street press website design"
          width={1134}
          height={756}
        />
      </section>
      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </ProjectPageLayout>
  );
}
