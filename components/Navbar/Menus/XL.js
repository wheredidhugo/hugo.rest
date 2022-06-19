import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import NavbarText from "../Text";
import Theme from "./Theme";

export default function XL({ items }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-row normal-menu not-last:mr-4">
      {items.map((item, index) => (
        <NavbarText text={item.text} link={item.link} key={index} />
      ))}
      <Theme className="text-xl" />
    </div>
  );
}
