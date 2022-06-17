import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import FooterIcon from "./Icon";

export default function Footer() {
  return (
    <div className="text-5xl text-center">
      <div className="rounded border border-zinc-300 dark:border-zinc-800 my-3"></div>
      <div className="not-last:mr-5">
        <FooterIcon icon={faGithub} link="https://github.com/wheredidhugo" />
        <FooterIcon icon={faNpm} link="https://npmjs.com/~wheredidhugo" />
        <FooterIcon
          icon={faCode}
          link="https://github.com/wheredidhugo/hugo.rest"
        />
      </div>
    </div>
  );
}
