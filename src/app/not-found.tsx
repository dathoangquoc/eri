import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center align-middle items-center w-screen h-screen">
      <Image src="/icons/cat.png" width={200} height={200} alt="catto"></Image>
      <h2 className="pb-6">Still workin on it...</h2>
      <p>Catch you at another time?</p>
      <Link href="/" className="absolute top-4 right-4 text-sm underline">
        Back
      </Link>
    </div>
  );
}
