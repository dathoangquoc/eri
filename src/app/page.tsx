import WhiteKey from "@/components/white-key";
import BlackKey from "@/components/black-key";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-dark bg-dark h-full">
      <h1>
        <div className="flex px-2 pt-4 justify-between bg-dark">
          <span className="w-[40%] text-sm lg:text-xl md:text-[28px] font-medium text-[#E4D0EB]">
            nhung le/eri
          </span>
          <span className="w-[60%] text-xs md:text-lg text-white text-right">
            create a bit of everything
          </span>
        </div>
      </h1>

      <div className="lg:px-8 px-2 py-6">
        {/* C */}
        <div className="relative">
          <WhiteKey path="/pepero-day" video="/bg/pepero.webm">11.11 is PEPERO Day</WhiteKey>
        </div>
        {/* B */}
        <div className="relative">
          <WhiteKey path="/dat-bike-quantum-s">Dat Bike Quantum S</WhiteKey>
        </div>
        {/* A */}
        <div className="relative">
          <BlackKey content="TL;DR"></BlackKey>
          <WhiteKey path="/">
            "Kêt":
            <span className="hidden sm:inline"> </span>
            <span className="sm:hidden"> <br /> </span>
            A Charity Trip
          </WhiteKey>
        </div>
        {/* G */}
        <div className="relative">
          <BlackKey content="Blogs"></BlackKey>
          <WhiteKey path="/">Personal Works</WhiteKey>
        </div>
        {/* F */}
        <div className="relative">
          <BlackKey></BlackKey>
          <WhiteKey path="/">Bowen Street Press</WhiteKey>
        </div>
        {/* E */}
        <div className="relative">
          <WhiteKey path="/">
            Mentree
            <span className="hidden sm:inline"> </span>
            <span className="sm:hidden"> <br /> </span>
            Mentoring App
          </WhiteKey>
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
