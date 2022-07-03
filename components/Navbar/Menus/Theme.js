import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Theme({ className }) {
  const [themeIcon, setThemeIcon] = useState();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setThemeIcon(<FaSun />);
    } else {
      setThemeIcon(<FaMoon />);
    }
  }, [theme]);

  return (
    <button
      className={`${className} transition ease-in-out duration-300 text-xl child:mx-auto`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {themeIcon}
    </button>
  );
}
