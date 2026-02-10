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
import ProjectPageLayout from "@/components/project-layout";

export default function DatBikePage() {
  return (
    <ProjectPageLayout
      title="Dat Bike Quantum S series"
      subtitle="[INFLUENCER CAMPAIGN]"
    > 
        {/* Main image */}
        <div>
          <p>
            As an innovative product in the Vietnam market, electric motorbikes
            faced immense skepticism from the public. How can a Vietnamese
            start-up brand like Dat Bike break down those cognitive barriers?
          </p>
          <video src="/dat-bike/main.webm" className="w-full h-auto block object-cover" autoPlay loop muted playsInline />
        </div>

        <SectionHeading
          title="Content Coordination"
          left={
            <span>
            Over 1M <br className="hidden lg:block" /> engagements
          </span>
          }
          right="15M views"
        />
        <p className="description">
          As a start-up, Dat Bike has the freedom to define its own personality,
          so we chose wit and fierceness to cut through the usual noise, getting
          the audience to hear what Dat Bike has to offer. I coordinated
          influencer content production, managing timelines, and guiding
          feedback to align with the client's expectations.
        </p>

        {/* Tiktoks */}
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <>
                  <blockquote
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@namtriinh/video/7589239914915532053"
                    data-video-id="7589239914915532053"
                    style={{ maxWidth: 605, minWidth: 5 }}
                  >
                    {" "}
                    <section>
                      {" "}
                      <a
                        target="_blank"
                        title="@namtriinh"
                        href="https://www.tiktok.com/@namtriinh?refer=embed"
                      >
                        @namtriinh
                      </a>{" "}
                      <a
                        title="DatBike"
                        target="_blank"
                        href="https://www.tiktok.com/tag/DatBike?refer=embed"
                      >
                        #DatBike
                      </a>{" "}
                      <a
                        title="DatBikeQuantum"
                        target="_blank"
                        href="https://www.tiktok.com/tag/DatBikeQuantum?refer=embed"
                      >
                        #DatBikeQuantum
                      </a>{" "}
                      <a
                        target="_blank"
                        title="\u266C Aesthetic - Tollan Kim"
                        href="https://www.tiktok.com/music/Aesthetic-7072513628145977346?refer=embed"
                      >
                        ♬ Aesthetic - Tollan Kim
                      </a>{" "}
                    </section>{" "}
                  </blockquote>{" "}
                  <script async src="https://www.tiktok.com/embed.js" />
                </>
              </>
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@xenhalacanh/video/7572141194134768916"
                  data-video-id="7572141194134768916"
                  style={{ maxWidth: 605, minWidth: 5 }}
                >
                  {" "}
                  <section>
                    {" "}
                    <a
                      target="_blank"
                      title="@xenhalacanh"
                      href="https://www.tiktok.com/@xenhalacanh?refer=embed"
                    >
                      @xenhalacanh
                    </a>{" "}
                    Anh lớn trong trường và cậu sinh viên may mắn{" "}
                    <a
                      title="datbike"
                      target="_blank"
                      href="https://www.tiktok.com/tag/datbike?refer=embed"
                    >
                      #DatBike
                    </a>{" "}
                    <a
                      title="datbikequantum"
                      target="_blank"
                      href="https://www.tiktok.com/tag/datbikequantum?refer=embed"
                    >
                      #DatBikeQuantum
                    </a>{" "}
                    <a
                      target="_blank"
                      title="\u266C nh\u1EA1c n\u1EC1n  - xe nh\xE0 l\xE1 c\xE0nh"
                      href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-xe-nh\xE0-l\xE1-c\xE0nh-7572141428828310279?refer=embed"
                    >
                      ♬ nhạc nền - xe nhà lá cành
                    </a>{" "}
                  </section>{" "}
                </blockquote>
              </>
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/3">
              <>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@lebaoofficial/video/7587649327305182484"
                  data-video-id="7587649327305182484"
                  style={{ maxWidth: 605, minWidth: 5 }}
                >
                  {" "}
                  <section>
                    {" "}
                    <a
                      target="_blank"
                      title="@lebaoofficial"
                      href="https://www.tiktok.com/@lebaoofficial?refer=embed"
                    >
                      @lebaoofficial
                    </a>{" "}
                    Mừng xe mới{" "}
                    <a
                      title="datbike"
                      target="_blank"
                      href="https://www.tiktok.com/tag/datbike?refer=embed"
                    >
                      #DatBike
                    </a>{" "}
                    <a
                      title="datbikequantum"
                      target="_blank"
                      href="https://www.tiktok.com/tag/datbikequantum?refer=embed"
                    >
                      #DatBikeQuantum
                    </a>{" "}
                    <a
                      target="_blank"
                      title="\u266C nh\u1EA1c n\u1EC1n - L\xEA B\u1EA3o"
                      href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-7587649380816145170?refer=embed"
                    >
                      ♬ nhạc nền - Lê Bảo
                    </a>{" "}
                  </section>{" "}
                </blockquote>
              </>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      {/* Tiktok script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </ProjectPageLayout>
  );
}
