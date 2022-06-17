import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faVuejs,
  faRaspberryPi,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
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
        <p>
          I like <FontAwesomeIcon icon={faJs} /> and wrote my website using{" "}
          <FontAwesomeIcon icon={faReact} /> (Next.js but couldn&apos;t find the
          icon).
        </p>
        <p>
          In the past I&apos;ve used <FontAwesomeIcon icon={faVuejs} />, but
          I&apos;m now using <FontAwesomeIcon icon={faReact} /> for multiple
          reasons.
        </p>
        <p>
          I would also enjoy learning more <FontAwesomeIcon icon={faPython} />{" "}
          at school and start making cool projects with it.
        </p>
        <p>
          I would also enjoy getting a <FontAwesomeIcon icon={faRaspberryPi} />{" "}
          4.
        </p>
        <p>
          I don&apos;t really know how to end this but I need lines to finish.
        </p>
        <p>
          Here are my{" "}
          <Link href="/projects">
            <span>projects</span>
          </Link>{" "}
          and here&apos;s how to{" "}
          <Link href="/contact">
            <span>contact me</span>
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
