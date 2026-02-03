import WhiteKey from "@/components/white-key";
import BlackKey from "@/components/black-key";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-dark bg-dark h-full">
      <h1>
        <div className="flex p-5 justify-between bg-dark">
          <span className="text-lg lg:text-xl md:text-[28px] font-medium text-[#E4D0EB]">
            nhung le/eri
          </span>
          <span className="text-sm md:text-lg text-white text-right">
            create a bit of everything
          </span>
        </div>
      </h1>

      <div className="lg:px-8 px-2 py-6">
        {/* C */}
        <div className="relative">
          <WhiteKey content="11.11 is PEPERO Day" path="/pepero-day"></WhiteKey>
        </div>
        {/* B */}
        <div className="relative">
          <WhiteKey content="Dat Bike Quantum S" path="/dat-bike-quantum-s"></WhiteKey>
        </div>
        {/* A */}
        <div className="relative">
          <BlackKey content="TL;DR"></BlackKey>
          <WhiteKey content='"Kêt" - A Charity Trip' path="/"></WhiteKey>
        </div>
        {/* G */}
        <div className="relative">
          <BlackKey content="Blogs"></BlackKey>
          <WhiteKey content="Personal Works" path="/"></WhiteKey>
        </div>
        {/* F */}
        <div className="relative">
          <BlackKey></BlackKey>
          <WhiteKey content="Bowen Street Press" path="/"></WhiteKey>
        </div>
        {/* E */}
        <div className="relative">
          <WhiteKey content="Mentree - Mentoring App" path="/"></WhiteKey>
        </div>
        {/* D */}
        <div className="relative">
          <BlackKey></BlackKey>
          <WhiteKey></WhiteKey>
        </div>
        {/* C */}
        <div className="relative">
          <BlackKey></BlackKey>
          <WhiteKey></WhiteKey>
        </div>
      </div>
      <p className="text-white pb-9 w-full text-center text-md lg:text-xl">
        nhung.ple.hn@gmail.com
      </p>
    </main>
  );
}
