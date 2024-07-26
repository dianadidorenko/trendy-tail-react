import { Search, ShoppingBag, UserRound } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { useContext } from "react";
import { CartContext } from "@/lib/context/CartContext";

const icons = [
  {
    path: "/",
    name: <Search />,
  },
  {
    path: "/",
    name: <UserRound />,
  },
  {
    path: "",
    name: <ThemeToggler />,
  },
];

const SettingsHeader = ({ containerStyles, linkStyles }) => {
  const { itemAmount } = useContext(CartContext);
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} className={`${linkStyles}`}>
          <div className={'w-[25px] h-[25px]'}>{icon.name}</div>
        </Link>
      ))}

      <Link href={"/cart"} className={`flex gap-2`}>
        <ShoppingBag />
        {itemAmount > 0 && (
          <span className="absolute right-4 top-4 bg-white border-2 border-darkBlueColor py-[1px] px-[6px] rounded-full text-primary text-[12px] transition-all">
            {itemAmount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default SettingsHeader;
