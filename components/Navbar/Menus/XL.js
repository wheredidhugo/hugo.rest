import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import NavbarText from "../Text";

export default function XL({ items }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-row normal-menu not-last:mr-4">
      {items.map((item, index) => (
        <NavbarText text={item.text} link={item.link} key={index} />
      ))}
      <button
        className="text-xl"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
      </button>
    </div>
  );
}
