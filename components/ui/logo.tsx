import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex space-x-2" aria-label="Safify">
      <img
        src="/images/safify-logo.png"
        alt="Safify Logo"
        className="h-7 w-7"
      />
      <span className="text-lg text-gray-800">SAFIFY</span>

    </Link>
  );
}
