import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  name,
  description,
  link,
  icons,
  github,
  npmjs,
}) {
  return (
    <div>
      <a href={link} className="hover:underline">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>{description}</p>
          <div className="text-2xl not-last:mr-5">
            {icons
              ? icons.map((item, index) => (
                  <FontAwesomeIcon icon={item} key={index} />
                ))
              : ""}
          </div>
        </div>
      </a>
      <div className="not-first:ml-3">
        {github ? (
          <a href={github} className="text-2xl opacity-30 hover:opacity-100">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : (
          ""
        )}
        {npmjs ? (
          <a href={npmjs} className="text-2xl opacity-30 hover:opacity-100">
            <FontAwesomeIcon icon={faNpm} />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
