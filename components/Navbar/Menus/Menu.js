import Burger from "./Burger";
import XL from "./XL";

export default function Menu({ items }) {
  return (
    <>
      <div className="sm:hidden">
        <Burger items={items} />
      </div>
      <div className="hidden sm:flex">
        <XL items={items} />
      </div>
    </>
  );
}
