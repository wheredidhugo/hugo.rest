import { FaGithub, FaNpm, FaCode } from "react-icons/fa";
import FooterIcon from "./Icon";

export default function Footer() {
  return (
    <div className="text-5xl text-center mt-5">
      <div className="rounded border border-zinc-300 dark:border-zinc-700 my-3"></div>
      <div className="not-last:mr-5 child:inline">
        <FooterIcon
          icon={<FaGithub />}
          link="https://github.com/wheredidhugo"
        />
        <FooterIcon icon={<FaNpm />} link="https://npmjs.com/~wheredidhugo" />
        <FooterIcon
          icon={<FaCode />}
          link="https://github.com/wheredidhugo/hugo.rest"
        />
      </div>
    </div>
  );
}
