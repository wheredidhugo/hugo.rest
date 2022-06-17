import Link from "next/link";

export default function NavbarText({ text, link }) {
  return (
    <Link href={link}>
      <h1 className="text-2xl hover:underline cursor-pointer">{text}</h1>
    </Link>
  );
}
