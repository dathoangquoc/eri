import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectPageLayout from "@/components/project-layout";

export default function KetCharityPage() {
  return (
    <ProjectPageLayout title='"Ket" A charity trip' subtitle="[PHOTO DOCUMENTARY]">
        {/* Main image */}
        <div>
          <p>
            “Ket” means an ending to a story, or a bond between us. Either
            meaning represents RMIT Cineverse Club--a space for cinephiles.
            Together, we take on a trip to document the lives of orphans and
            teach them how to make a stop-motion Lego movie.
          </p>
          <Image
            src="/ket-charity/main.png"
            alt="ket charity"
            width={1134}
            height={756}
          />
        </div>

        <p className="pt-12 lg:pt-24">
          It was another day at Thien Huong Pagoda when our club ...?
        </p>
        <Image
          src="/ket-charity/1.png"
          alt="ket charity"
          width={1134}
          height={756}
        />
        <Image
          src="/ket-charity/2.png"
          alt="ket charity"
          width={1134}
          height={756}
        />

        <p className="pt-12 lg:pt-24">
          Upon arrival, the kids were suspicious and distant. Yet they lit up
          over the littlest toys--the kind we had long left in the corner of our
          memories.
        </p>
        <div className="flex flex-col lg:flex-row">
          <Image
            src="/ket-charity/3.png"
            alt="ket charity"
            width={440}
            height={248}
          />
          <Image
            src="/ket-charity/4.png"
            alt="ket charity"
            width={440}
            height={248}
          />
        </div>

        <p className="pt-12 lg:pt-24">
          As the bond grew on us, they have something to share, too.
        </p>
        <Image
          src="/ket-charity/5.png"
          alt="ket charity"
          width={1134}
          height={756}
        />

        <p className="pt-12 lg:pt-24">
          They lifted their proud little constructions after the Lego movie.
        </p>
        <Image
          src="/ket-charity/6.png"
          alt="ket charity"
          width={1134}
          height={756}
        />

        <p className="pt-12 lg:pt-24">
          At sunset, we packed up. The kids returned to their caretakers whose
          memories each name are slowly fading. After a lifetime devoted to
          care, the future before these respected caregivers remains uncertain.
        </p>
        <Image
          src="/ket-charity/7.png"
          alt="ket charity"
          width={1134}
          height={756}
        />
      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </ProjectPageLayout>
  );
}
