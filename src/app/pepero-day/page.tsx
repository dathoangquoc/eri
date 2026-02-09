import Link from "next/link";
import MusicStaff from "@/components/music-staff";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectPageLayout from "@/components/project-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/section-heading";

export default function PeperoPage() {
  return (
    <ProjectPageLayout
      title="11.11 is PEPERO Day"
      subtitle="[COMMUNICATION CAMPAIGN, OFFLINE ACTIVATION]"
    >
      
      {/* Main content */}
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8">
        {/* Main image */}
        <div>
          <p className="flex justify-between">
            <span className="body-1">10-day pop-up store</span>
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
          left="100,000 engagements"
          right="2.5M views"
        />

        {/* Tiktoks */}
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@quynhsanhdieu/video/7571098773800160532"
                  data-video-id="7571098773800160532"
                  style={{ maxWidth: 605, minWidth: 5 }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@quynhsanhdieu"
                      href="https://www.tiktok.com/@quynhsanhdieu?refer=embed"
                    >
                      @quynhsanhdieu
                    </a>
                    Tranh thủ đi luôn đi các bác ơiii ✨
                    <a
                      title="quynhsanhdieu"
                      target="_blank"
                      href="https://www.tiktok.com/tag/quynhsanhdieu?refer=embed"
                    >
                      #quynhsanhdieu
                    </a>
                    <a
                      title="pepero"
                      target="_blank"
                      href="https://www.tiktok.com/tag/pepero?refer=embed"
                    >
                      #PEPERO
                    </a>
                    <a
                      title="showyourlovewithpepero"
                      target="_blank"
                      href="https://www.tiktok.com/tag/showyourlovewithpepero?refer=embed"
                    >
                      #ShowYourLoveWithPEPERO
                    </a>
                    <a
                      title="peperoday"
                      target="_blank"
                      href="https://www.tiktok.com/tag/peperoday?refer=embed"
                    >
                      #PEPERODay
                    </a>
                    <a
                      title="straykids"
                      target="_blank"
                      href="https://www.tiktok.com/tag/straykids?refer=embed"
                    >
                      #STRAYKIDS
                    </a>
                    <a
                      target="_blank"
                      title="\u266C nh\u1EA1c n\u1EC1n  - Qu\u1EF3nh S\xE0nh \u0110i\u1EC7u \uD83D\uDC7B"
                      href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-Qu\u1EF3nh-S\xE0nh-\u0110i\u1EC7u-\uD83D\uDC7B-7571098945539263240?refer=embed"
                    >
                      ♬ nhạc nền - Quỳnh Sành Điệu 👻
                    </a>
                  </section>
                </blockquote>
              </>
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@eveviday/video/7571329855208377607"
                  data-video-id="7571329855208377607"
                  style={{ maxWidth: 605, minWidth: 5 }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@eveviday"
                      href="https://www.tiktok.com/@eveviday?refer=embed"
                    >
                      @eveviday
                    </a>
                    Tokbokki phô mai, pepero, sushi tôm trứng cá chuồn 🧀🍣🦐🍫
                    <a
                      title="Cocovie"
                      target="_blank"
                      href="https://www.tiktok.com/tag/Cocovie?refer=embed"
                    >
                      #Cocovie
                    </a>
                    <a
                      title="PEPEROday"
                      target="_blank"
                      href="https://www.tiktok.com/tag/PEPEROday?refer=embed"
                    >
                      #PEPEROday
                    </a>
                    <a
                      title="PEPE"
                      target="_blank"
                      href="https://www.tiktok.com/tag/PEPE?refer=embed"
                    >
                      #PEPE
                    </a>
                    ungtiktok
                    <a
                      title="PEPERO"
                      target="_blank"
                      href="https://www.tiktok.com/tag/PEPERO?refer=embed"
                    >
                      #PEPERO
                    </a>
                    <a
                      title="ShowYourLoveWithPEPERO"
                      target="_blank"
                      href="https://www.tiktok.com/tag/ShowYourLoveWithPEPERO?refer=embed"
                    >
                      #ShowYourLoveWithPEPERO
                    </a>
                    <a
                      target="_blank"
                      title="\u266C nh\u1EA1c n\u1EC1n  - CocoVie \uD83E\uDD65 \uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F"
                      href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-CocoVie-\uD83E\uDD65-\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F-7571329921362545416?refer=embed"
                    >
                      ♬ nhạc nền - CocoVie 🥥 🙆🏻‍♀️
                    </a>
                  </section>
                </blockquote>
              </>
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@cdqtit99/video/7571422826020998418"
                  data-video-id="7571422826020998418"
                  style={{ maxWidth: 605, minWidth: 5 }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@cdqtit99"
                      href="https://www.tiktok.com/@cdqtit99?refer=embed"
                    >
                      @cdqtit99
                    </a>
                    nhớ manifest vào 11:11 tối nayyy ngày 11/11 nháaa 🪄🔮💆🏻‍♀️
                    <a
                      title="quyhtit"
                      target="_blank"
                      href="https://www.tiktok.com/tag/quyhtit?refer=embed"
                    >
                      #quyhtit
                    </a>
                    <a
                      title="schannel"
                      target="_blank"
                      href="https://www.tiktok.com/tag/schannel?refer=embed"
                    >
                      #schannel
                    </a>
                    <a
                      title="PEPERO"
                      target="_blank"
                      href="https://www.tiktok.com/tag/PEPERO?refer=embed"
                    >
                      #PEPERO
                    </a>
                    <a
                      title="showyourlovewithpepero"
                      target="_blank"
                      href="https://www.tiktok.com/tag/showyourlovewithpepero?refer=embed"
                    >
                      #showyourlovewithpepero
                    </a>
                    <a
                      title="PEPEROday"
                      target="_blank"
                      href="https://www.tiktok.com/tag/PEPEROday?refer=embed"
                    >
                      #PEPEROday
                    </a>
                    <a
                      target="_blank"
                      title="\u266C original sound  - t\xEDt \u1EDF tr\xEAn tiktok \uD83C\uDF37"
                      href="https://www.tiktok.com/music/original-sound-t\xEDt-\u1EDF-tr\xEAn-tiktok-\uD83C\uDF37-7571422865426336530?refer=embed"
                    >
                      ♬ original sound - tít ở trên tiktok 🌷
                    </a>
                  </section>
                </blockquote>
              </>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots />
        </Carousel>

        <SectionHeading title="Partnership" />

        <Carousel className="w-full h-fit pb-8">
          <CarouselContent>
            <CarouselItem className="h-fit">
              <video src="/pepero-day/1.webm" className="w-full h-auto block object-cover" autoPlay loop muted playsInline />
            </CarouselItem>
            <CarouselItem className="h-fit">
              <video src="/pepero-day/2.webm" className="w-full h-auto block object-cover" autoPlay loop muted playsInline />
            </CarouselItem>
            <CarouselItem className="h-fit">
              <video src="/pepero-day/3.webm" className="w-full h-auto block object-cover" autoPlay loop muted playsInline />
            </CarouselItem>
          </CarouselContent>
          <CarouselDots/>
        </Carousel>
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
    </ProjectPageLayout>
  );
}
