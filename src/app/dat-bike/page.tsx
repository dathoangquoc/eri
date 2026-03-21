import ProjectPageLayout from "@/components/project-layout";
import SectionHeading from "@/components/section-heading";
import CircularGallery from "@/components/circular-gallery";
import Tiktok from "@/components/tiktok";

export default function DatBikePage() {
  return (
    <ProjectPageLayout
      title="Dat Bike Quantum S series"
      subtitle="[INFLUENCER CAMPAIGN]"
      musicStaffLeft="Moderato"
      musicStaffRight="Oct - Nov 2025"
      musicStaffBpm={112}
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
        <CircularGallery offsetY={200} spacing={100} bend={2}>
          <Tiktok
            src="/dat-bike/tiktok-1.png"
            alt="dat bike"
            text="@namtriinh"
            href="https://www.tiktok.com/@namtriinh/video/7589239914915532053"
            likes="216.8K"
            comments="2866"
            saves="6814"
            views="3.2M"
          />
          <Tiktok
            src="/dat-bike/tiktok-2.png"
            alt="dat bike"
            text="@xenhalacanh"
            href="https://www.tiktok.com/@xenhalacanh/video/7572141194134768916"
            likes="41.3K"
            comments="176"
            saves="853"
            views="770.2K"
          />
          <Tiktok
            src="/dat-bike/tiktok-3.png"
            alt="dat bike"
            text="@lebaoofficial"
            href="https://www.tiktok.com/@lebaoofficial/video/7587649327305182484"
            likes="88.4K"
            comments="375"
            saves="1515"
            views="2.2M"
          />
        </CircularGallery>
    </ProjectPageLayout>
  );
}
