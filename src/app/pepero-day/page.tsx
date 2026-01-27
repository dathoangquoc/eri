import Link from "next/link";
import MusicStaff from "@/components/music-staff";

export default function Page() {
    return (
        <main className="relative w-full h-screen p-20 bg-white text-black">
            <Link href="/" className="text-xl absolute top-0 right-0 py-3.5 px-6 bg-[#E4D0EB80]">Back to Works</Link> 
            <h1 className="text-4xl text-center w-full font-medium">11.11 is PEPERO Day</h1>
            <p className="text-2xl text-center w-full font-light">[COMMUNICATION CAMPAIGN, OFFLINE ACTIVATION]</p>
            {/* Music staff */}
            <div className="py-16 px-12">
                <span className="italic text-2xl">Moderato ♩ = 120</span>
                <div className="relative">
                    <MusicStaff/>
                    <p>10000 visitors</p>
                    <p>15 days</p>
                </div>
            </div>  
        </main>
    );
}