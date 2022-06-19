import { FaGithub, FaNpm } from "react-icons/fa";
import { Children } from "react";

export default function Project({
  name,
  description,
  link,
  icons,
  github,
  npmjs,
}) {
  const iconsReact = Children.toArray(icons);
  return (
    <div>
      <a href={link} className="hover:underline">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>{description}</p>
          <div className="text-2xl not-last:mr-4 child:inline">
            {iconsReact.map((item) => item)}
          </div>
        </div>
      </a>
      <div className="not-first:ml-3">
        {github ? (
          <a href={github} className="text-2xl opacity-30 hover:opacity-100">
            <FaGithub className="inline" />
          </a>
        ) : (
          ""
        )}
        {npmjs ? (
          <a href={npmjs} className="text-2xl opacity-30 hover:opacity-100">
            <FaNpm className="inline" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
