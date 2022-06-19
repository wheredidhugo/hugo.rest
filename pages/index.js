import Head from "next/head";
import Link from "next/link";
import {
  FaJs,
  FaReact,
  FaVuejs,
  FaRaspberryPi,
  FaPython,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import logo from "../public/hugo-half.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>hugo</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <div className="hidden sm:block float-right">
          <Image
            src={logo}
            alt="Hugo image"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <p>Hi, I&apos;m Hugo</p>
        <p>
          Welcome to my website, I don&apos;t really know what to put here right
          now so consider this as a placeholder.
        </p>
        <p className="child:inline">
          I like <FaJs /> and wrote my website using <TbBrandNextjs />.
        </p>
        <p className="child:inline">
          In the past I&apos;ve used, but I&apos;m now using <FaReact /> for
          multiple reasons.
        </p>
        <p className="child:inline">
          I would also enjoy learning more <FaPython /> at school and start
          making cool projects with it.
        </p>
        <p>
          I would also enjoy getting a <FaRaspberryPi className="inline" /> 4.
        </p>
        <p>
          I don&apos;t really know how to end this but I need lines to finish.
        </p>
        <p>
          Here are my{" "}
          <Link href="/projects">
            <span className="underline cursor-pointer">projects</span>
          </Link>{" "}
          and here&apos;s how to{" "}
          <Link href="/contact">
            <span className="underline cursor-pointer">contact me</span>
          </Link>
        </p>
        <p>
          I&apos;m sorry if the site is messy right now, I will try to improve
          it later.
        </p>
      </div>
    </>
  );
}
