import Link from "next/link";
import { useState } from "react";
import Menu from "./Menus/Menu";

export default function Navbar() {
  const [wheredid, setWhereDid] = useState();
  return (
    <div className="flex flex-row pb-7">
      <Link href="/">
        <h1
          className="gradient-text font-bold text-2xl cursor-pointer transition-all ease-in-out duration-300 hover:ml-3"
          onMouseEnter={() => setWhereDid("wheredid")}
          onMouseLeave={() => setWhereDid()}
        >
          {wheredid}hugo
        </h1>
      </Link>
      <div className="ml-auto">
        <Menu
          items={[
            {
              text: "About",
              link: "/",
            },
            {
              text: "Projects",
              link: "/projects",
            },
            {
              text: "Contact",
              link: "/contact",
            },
          ]}
        />
      </div>
      <style jsx>
        {`
          .gradient-text {
            background: linear-gradient(120deg, #2631fd, #a01dfd);
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </div>
  );
}
