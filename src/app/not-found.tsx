import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center align-middle items-center w-screen h-screen bg-white text-black
    p-2
    ">
      <Image src="/icons/cat.png" width={200} height={200} alt="catto"></Image>
      <h2 className="pb-1 text-3xl lg:text-6xl">Still workin on it...</h2>
      <p className="body-1">Catch you at another time?</p>
      <Link href="/" className="absolute top-8 right-8 text-sm underline">
        Back
      </Link>
    </div>
  );
}
