import Link from "next/link";
import MusicStaff from "@/components/music-staff";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="relative w-screen min-h-screen py-20 px-6 bg-white text-black flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="w-full">
        <header className="sticky top-20 self-start w-full h-fit">
          <h2 className="w-full pb-3">11.11 is PEPERO Day</h2>
          <p className="body-1 w-full">
            [COMMUNICATION CAMPAIGN, OFFLINE ACTIVATION]
          </p>
        </header>
      </div>

      {/* Main content */}
      <section className="flex-1 min-w-[58vw] max-w-[58vw]">
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
          ></Image>
        </div>
        <div className="relative">
          <h3 className="absolute top-0 w-full text-center">
            Content Coordination
          </h3>
          <p className="flex justify-between">
            <span className="body-1 w-20">100,000 engagements</span>
            <span className="body-1 w-20">2.5M views</span>
          </p>
        </div>

        {/* Tiktoks */}
        <div className="flex gap-2">
          <>
            <blockquote
              className="tiktok-embed scale-75"
              cite="https://www.tiktok.com/@quynhsanhdieu/video/7571098773800160532"
              data-video-id="7571098773800160532"
              style={{ maxWidth: 605, minWidth: 5 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@quynhsanhdieu"
                  href="https://www.tiktok.com/@quynhsanhdieu?refer=embed"
                >
                  @quynhsanhdieu
                </a>{" "}
                Tranh thủ đi luôn đi các bác ơiii ✨
                <a
                  title="quynhsanhdieu"
                  target="_blank"
                  href="https://www.tiktok.com/tag/quynhsanhdieu?refer=embed"
                >
                  #quynhsanhdieu
                </a>{" "}
                <a
                  title="pepero"
                  target="_blank"
                  href="https://www.tiktok.com/tag/pepero?refer=embed"
                >
                  #PEPERO
                </a>{" "}
                <a
                  title="showyourlovewithpepero"
                  target="_blank"
                  href="https://www.tiktok.com/tag/showyourlovewithpepero?refer=embed"
                >
                  #ShowYourLoveWithPEPERO
                </a>{" "}
                <a
                  title="peperoday"
                  target="_blank"
                  href="https://www.tiktok.com/tag/peperoday?refer=embed"
                >
                  #PEPERODay
                </a>{" "}
                <a
                  title="straykids"
                  target="_blank"
                  href="https://www.tiktok.com/tag/straykids?refer=embed"
                >
                  #STRAYKIDS
                </a>{" "}
                <a
                  target="_blank"
                  title="\u266C nh\u1EA1c n\u1EC1n  - Qu\u1EF3nh S\xE0nh \u0110i\u1EC7u \uD83D\uDC7B"
                  href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-Qu\u1EF3nh-S\xE0nh-\u0110i\u1EC7u-\uD83D\uDC7B-7571098945539263240?refer=embed"
                >
                  ♬ nhạc nền - Quỳnh Sành Điệu 👻
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js" />
          </>
          <>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@eveviday/video/7571329855208377607"
              data-video-id="7571329855208377607"
              style={{ maxWidth: 605, minWidth: 5 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@eveviday"
                  href="https://www.tiktok.com/@eveviday?refer=embed"
                >
                  @eveviday
                </a>{" "}
                Tokbokki phô mai, pepero, sushi tôm trứng cá chuồn 🧀🍣🦐🍫{" "}
                <a
                  title="Cocovie"
                  target="_blank"
                  href="https://www.tiktok.com/tag/Cocovie?refer=embed"
                >
                  #Cocovie
                </a>{" "}
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
                ungtiktok{" "}
                <a
                  title="PEPERO"
                  target="_blank"
                  href="https://www.tiktok.com/tag/PEPERO?refer=embed"
                >
                  #PEPERO
                </a>{" "}
                <a
                  title="ShowYourLoveWithPEPERO"
                  target="_blank"
                  href="https://www.tiktok.com/tag/ShowYourLoveWithPEPERO?refer=embed"
                >
                  #ShowYourLoveWithPEPERO
                </a>{" "}
                <a
                  target="_blank"
                  title="\u266C nh\u1EA1c n\u1EC1n  - CocoVie \uD83E\uDD65 \uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F"
                  href="https://www.tiktok.com/music/nh\u1EA1c-n\u1EC1n-CocoVie-\uD83E\uDD65-\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F-7571329921362545416?refer=embed"
                >
                  ♬ nhạc nền - CocoVie 🥥 🙆🏻‍♀️
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js" />
          </>
          <>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@cdqtit99/video/7571422826020998418"
              data-video-id="7571422826020998418"
              style={{ maxWidth: 605, minWidth: 5 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@cdqtit99"
                  href="https://www.tiktok.com/@cdqtit99?refer=embed"
                >
                  @cdqtit99
                </a>{" "}
                nhớ manifest vào 11:11 tối nayyy ngày 11/11 nháaa 🪄🔮💆🏻‍♀️{" "}
                <a
                  title="quyhtit"
                  target="_blank"
                  href="https://www.tiktok.com/tag/quyhtit?refer=embed"
                >
                  #quyhtit
                </a>{" "}
                <a
                  title="schannel"
                  target="_blank"
                  href="https://www.tiktok.com/tag/schannel?refer=embed"
                >
                  #schannel
                </a>{" "}
                <a
                  title="PEPERO"
                  target="_blank"
                  href="https://www.tiktok.com/tag/PEPERO?refer=embed"
                >
                  #PEPERO
                </a>{" "}
                <a
                  title="showyourlovewithpepero"
                  target="_blank"
                  href="https://www.tiktok.com/tag/showyourlovewithpepero?refer=embed"
                >
                  #showyourlovewithpepero
                </a>{" "}
                <a
                  title="PEPEROday"
                  target="_blank"
                  href="https://www.tiktok.com/tag/PEPEROday?refer=embed"
                >
                  #PEPEROday
                </a>{" "}
                <a
                  target="_blank"
                  title="\u266C original sound  - t\xEDt \u1EDF tr\xEAn tiktok \uD83C\uDF37"
                  href="https://www.tiktok.com/music/original-sound-t\xEDt-\u1EDF-tr\xEAn-tiktok-\uD83C\uDF37-7571422865426336530?refer=embed"
                >
                  ♬ original sound - tít ở trên tiktok 🌷
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js" />
          </>
        </div>
      </section>

      {/* Right Column */}
      <div className="w-full">
        <Button
          asChild
          variant="link"
          className="sticky top-20 self-start w-full h-fit"
        >
          <Link href="/" className="text-sm my-3.5 mx-6">
            Back
            {/* <Image alt="arrows icon" src="/icons/arrows-in.svg" width={32} height={32}></Image> */}
          </Link>
        </Button>
      </div>
    </main>
  );
}
