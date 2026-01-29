import Link from "next/link";
import MusicStaff from "@/components/music-staff";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <main className="relative w-full min-h-screen py-20 px-6 bg-white text-black">
            <Button asChild variant="link" className="absolute top-0 right-0">
                <Link href="/" className="text-xl my-3.5 mx-6">Back to Works
                    <Image alt="arrows icon" src="/icons/arrows-in.svg" width={32} height={32}></Image>
                </Link>
            </Button>
            <div className="flex gap-8">
                <header className="sticky top-20 self-start md:w-96 w-full h-fit">
                    <h1 className="w-full">11.11 is PEPERO Day</h1>
                    <p className="body-1 w-full">[COMMUNICATION CAMPAIGN, OFFLINE ACTIVATION]</p>
                </header>
                {/* Main content */}
                <section className="flex-1">
                    <div>
                        <p className="flex justify-between">
                            <span className="body-1">10-day pop-up store</span>
                            <span className="body-1">10,000 visitors</span>
                        </p>
                        <Image src="/pepero-day/main.png" alt="pepero day" width={1134} height={756}></Image>
                    </div>
                    <div className="relative">
                        <h3 className="absolute top-0">Content Coordination</h3>
                        <p className="flex justify-between">
                            <span className="body-1">100,000 engagements</span>
                            <span className="body-1">2.5M views</span>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}