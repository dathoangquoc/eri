import WhiteKey from "@/components/white-key";
import BlackKey from "@/components/black-key";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-black h-full">
      <h1>
        <div className="flex p-5 justify-between bg-gray-200">
        <span className="text-3xl font-medium">nhung le/eri</span>
        <span className="text-xl">thinking of a banger to quote here</span>
        </div>
      </h1>

      {/* E */}
      <div className="relative">
        <WhiteKey content="Mixed media work"></WhiteKey>
      </div>

      {/* D */}
      <div className="relative">
        <BlackKey content="TL;DR"></BlackKey>
        <WhiteKey content="11.11 is PEPERO Day" path="/pepero-day"></WhiteKey>
      </div>
      {/* C */}
      <div className="relative">
        <BlackKey content="Contacts"></BlackKey>
        <WhiteKey content=""></WhiteKey>
      </div>
      {/* B */}
      <div className="relative">
        <WhiteKey content=""></WhiteKey>
      </div>
      {/* A */}
      <div className="relative">
        <BlackKey content="Blogs"></BlackKey>
        <WhiteKey content=""></WhiteKey>
      </div>
      {/* G */}
      <div className="relative">
        <BlackKey content=""></BlackKey>
        <WhiteKey content=""></WhiteKey>
      </div>
      {/* F */}
      <div className="relative">
        <BlackKey content=""></BlackKey>
        <WhiteKey content=""></WhiteKey>
      </div>
      {/* E */}
      <div className="relative">
        <WhiteKey content=""></WhiteKey>
      </div>
            <div className="relative">
        <WhiteKey content=""></WhiteKey>
      </div>
      
    </main>
  );
}
