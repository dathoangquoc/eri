import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-dark text-white">
      <Link href="/" className="absolute top-8 right-8 text-sm underline">
        Back
      </Link>

      <main className="flex p-24">
        <div className="w-1/3">
          <h2>Nhung Le</h2>
          <p>A multi-disciplinary creative</p>
          <p>nhung.ple.hn@gmail.com</p>
        </div>
        
        <div className="w-2/3 flex flex-col gap-5">
          <p>
            I do creative things. I love the process of making: where ideas
            brew, stumble, and resolve across UI/UX, sound, video, mixed media
            designs to commercial social posts.
          </p>
          <p>
            I don't work alone. Throughout uni clubs, IMC agency life and
            passion groups, I learn the rhythm of collaboration with designers,
            strategists, and developers.
          </p>
          <p>
            I see projects through. I plan thoroughly and coordinate difficult
            stakeholders to get them onboard. Time pressure tends to bring out
            my best work.
          </p>
          <p>
            What's next? I'm increasingly drawn to stylistic production
            environments like film, editorial, and event LEDs to explore
            different workflows and artistic expressions.
          </p>

          <h3>Education</h3>
          <p>
            <b>Bachelor of Professional Communication</b> ∘ 2022-2026 (3yrs)
            RMIT University Vietnam
          </p>

          <h3>Work Experience</h3>
          <hgroup>
          <h4>
            <b>Account & Strategy Intern</b> ∘ Oct 2025-Feb 2026 (4 mos)
          </h4>
          <p>
            Lotte Daehong Communications Vietnam
          </p>
          </hgroup>

          <hgroup>
          <h4>
            <b>Freelance Creative</b> ∘ June 2024-present
          </h4>
          <p>
            Projects: myRMIT, Mentree Mentoring App, Bowen Street Press website
          </p>
          </hgroup>

          <hgroup>
          <h4>
            <b>Head of Marketing</b> ∘ Jan 2023-June 2023 (6 mos)
          </h4>
          <p>
            RMIT Event Club Hanoi
          </p>
          </hgroup>

          <h3>Tools</h3>
          <div className="flex gap-5">
            <Image src="/about/figma.svg" width={69} height={69} alt="Figma logo"></Image>
            <Image src="/about/ps.svg" width={69} height={69} alt="Adobe Photoshop logo"></Image>
            <Image src="/about/pr.svg" width={69} height={69} alt="Adobe Premiere logo"></Image>
            <Image src="/about/au.svg" width={69} height={69} alt="Adobe Audition logo"></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
