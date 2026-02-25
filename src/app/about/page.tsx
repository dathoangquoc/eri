'use client'

import Link from "next/link";
import Image from "next/image";
import HoverFollowImage from "@/components/hover-follow-image";
import { useTransitionRouter } from "next-view-transitions";
import pageAnimation from "@/components/page-animation";

export default function AboutPage() {
  const router = useTransitionRouter();
  return (
    <div className="bg-dark text-white">
      <Link href="/" className="absolute top-8 right-8 text-sm underline" onClick={(e) => {
        e.preventDefault();
        router.push('/', {
          onTransitionReady: pageAnimation,
        });
      }}>
        Back
      </Link>

      <main className="flex flex-col lg:flex-row">
        <div className="border-b lg:border-r">
          <div className="lg:sticky lg:top-24 lg:self-start px-3 lg:px-24 pt-24 pb-10 ">
            <HoverFollowImage imageSrc="/about/me.jpg">
              Nhung Le
            </HoverFollowImage>
            <p className="pt-3">A multi-disciplinary creative</p>
            <p className="pt-2">nhung.ple.hn@gmail.com</p>
          </div>
        </div>

        <div className="lg:w-2/3 px-3 lg:px-24 pt-10 lg:pt-60 flex flex-col lg:gap-14 gap-8">
          <hgroup
            className="flex flex-col gap-5 
            lg:[&_p>b:first-of-type]:text-2xl [&_p>b:first-of-type]:text-base [&_p>span]:opacity-35 [&_p]:text-sm"
          >
            <p>
              <b>I do creative things.</b> <span>I love the</span> process of
              making: <span>where ideas brew, stumble, and resolve across</span>{" "}
              UI/UX, sound, video, mixed media designs <span>to</span>{" "}
              commercial social posts.
            </p>
            <p>
              <b>I don't work alone.</b> <span>Throughout</span> uni clubs, IMC
              agency life <span>and</span> passion groups, <span>I learn</span>{" "}
              the rhythm of collaboration{" "}
              <span>with designers, strategists, and developers.</span>
            </p>
            <p>
              <b>I see projects through.</b> <span>I</span> plan thoroughly{" "}
              <span>and</span> coordinate difficult stakeholders{" "}
              <span>to get them onboard</span>. Time pressure{" "}
              <span>tends to bring out my best work.</span>
            </p>
            <p>
              <b>What's next?</b> <span>I'm increasingly drawn to</span>{" "}
              stylistic production environments{" "}
              <span>
                like film, editorial, and event LEDs to explore different
                workflows and artistic expressions.
              </span>
            </p>
          </hgroup>

          {/* Education */}
          <hgroup className="flex flex-col gap-2 [&_p]:pl-2.5">
            <h3 className="">Education</h3>
            <p>
              <b>Bachelor of Professional Communication</b>{" "}
              <span className="text-secondary">
                {" "}
                <br className="lg:hidden" />∘ 2022-2026 (3yrs)
              </span>
            </p>
            <p>RMIT University Vietnam</p>
          </hgroup>

          {/* Work */}
          <hgroup className="flex flex-col gap-4 [&_hgroup]:pl-2.5">
            <h3 className="">Work Experience</h3>
            <hgroup>
              <h4>
                <b>Account & Strategy Intern</b>{" "}
                <span className="text-secondary">
                  {" "}
                  <br className="lg:hidden" />∘ Oct 2025-Feb 2026 (4 mos){" "}
                </span>
              </h4>
              <p>Lotte Daehong Communications Vietnam</p>
            </hgroup>
            <hgroup>
              <h4>
                <b>Freelance Creative</b>{" "}
                <span className="text-secondary">
                  {" "}
                  <br className="lg:hidden" /> ∘ June 2024-present{" "}
                </span>
              </h4>
              <p className="tiny">
                Projects: myRMIT, Mentree Mentoring App, Bowen Street Press
                website
              </p>
            </hgroup>
            <hgroup>
              <h4>
                <b>Head of Marketing</b>{" "}
                <span className="text-secondary">
                  {" "}
                  <br className="lg:hidden" />∘ Jan 2023-June 2023 (6 mos){" "}
                </span>
              </h4>
              <p>RMIT Event Club Hanoi</p>
            </hgroup>
          </hgroup>

          {/* Tools */}
          <hgroup className="pb-24">
            <h3 className="">Tools</h3>
            <div className="flex gap-5 p-4">
              <Image
                src="/about/figma.svg"
                width={50}
                height={50}
                alt="Figma logo"
              ></Image>
              <Image
                src="/about/ps.svg"
                width={50}
                height={50}
                alt="Adobe Photoshop logo"
              ></Image>
              <Image
                src="/about/pr.svg"
                width={50}
                height={50}
                alt="Adobe Premiere logo"
              ></Image>
              <Image
                src="/about/au.svg"
                width={50}
                height={50}
                alt="Adobe Audition logo"
              ></Image>
            </div>
          </hgroup>
        </div>
      </main>
    </div>
  );
}
