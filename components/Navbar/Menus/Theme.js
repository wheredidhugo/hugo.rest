import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme({ className }) {
  const { theme, setTheme } = useTheme();
  if (theme === "dark") {
    return (
      <button className={className} onClick={() => setTheme("light")}>
        <FaSun />
      </button>
    );
  } else {
    return (
      <button className={className} onClick={() => setTheme("dark")}>
        <FaMoon />
      </button>
    );
  }
}
