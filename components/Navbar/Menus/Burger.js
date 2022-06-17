import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavbarText from "../Text";
import { useTheme } from "next-themes";

export default function Burger({ items }) {
  const { theme, setTheme } = useTheme();
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [display, setDisplay] = useState("hidden");

  function burgerClick() {
    if (!burgerClicked) {
      setDisplay("flex");
      setBurgerClicked(true);
    } else if (burgerClicked) {
      setDisplay("hidden");
      setBurgerClicked(false);
    }
  }

  return (
    <div className="flex flex-col text-2xl h-0">
      <button className="text-right" onClick={burgerClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {/* TODO: add animation when menu is opened */}
      <div
        className={`${display} rounded absolute bg-zinc-300 dark:bg-zinc-800 w-auto h-auto flex-col px-7 py-7 top-16 right-7 text-center z-50 not-last:mb-2`}
      >
        {items.map((item, index) => (
          <NavbarText
            text={item.text}
            link={item.link}
            key={`burger-${index}`}
          />
        ))}
        <button
          className="text-2xl"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
      </div>
    </div>
  );
}
