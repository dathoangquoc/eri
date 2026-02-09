import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectPageLayout from "@/components/project-layout";

export default function PersonalWorksPage() {
  return (
    <ProjectPageLayout title="Personal pieces" subtitle="[MIXED MEDIA, POETRY]">
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8">
        {/* Main image */}
        <div className="body-1">
          <p className="flex justify-between">
            Hoi An - Cut-out poetry from a travel magazine
            <span>Sep 2025</span>
          </p>
          <Image
            src="/personal/main.png"
            alt="cut out poetry from a travel magazine"
            width={1134}
            height={756}
          />
        </div>

        <p className="flex justify-between pt-12 lg:pt-24 body-1">
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
      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </ProjectPageLayout>
  );
}
