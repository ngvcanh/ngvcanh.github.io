import Link from "next/link";

export function Logo() {
  return (
    <div>
      <Link href="/" className="font-bold text-sm italic whitespace-nowrap text-cyan-500">
        ngvcanh
      </Link>
    </div>
  );
}