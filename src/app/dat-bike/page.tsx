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

export default function DatBikePage() {
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
        <header className="sticky top-20 self-start w-full h-fit">
          <h1 className="w-full mb-4">Dat Bike Quantum S series</h1>
          <p className="body-1 w-full">[INFLUENCER CAMPAIGN]</p>
        </header>
      </div>

      {/* Main content */}
      <section className="flex-1 w-full lg:min-w-[58vw] lg:max-w-[58vw] mt-8">
        {/* Main image */}
        <div>
          <p>
            As an innovative product in the Vietnam market, electric motorbikes
            faced immense skepticism from the public. How can a Vietnamese
            start-up brand like Dat Bike break down those cognitive barriers?
          </p>
          <Image
            src="/dat-bike/main.png"
            alt="pepero day"
            width={1134}
            height={756}
          />
        </div>

        <SectionHeading
          title="Content Coordination"
          left="Over 1M engagements"
          right="15M views"
        />
        <p>
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
