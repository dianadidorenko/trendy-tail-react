import { Search, ShoppingBag, UserRound, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/context/CartContext";
import { useUser } from "@clerk/nextjs";
import SearchInput from "./SearchInput";

const SettingsHeader = ({ containerStyles, linkStyles }) => {
  const { itemAmount } = useContext(CartContext);
  const { user } = useUser();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className={`${containerStyles}`}>
      {isSearchVisible && <SearchInput closeSearch={closeSearch} />}

      <Link href={""} className={`${linkStyles}`} onClick={toggleSearch}>
        <Search size={20} />
      </Link>

      <Link href={""} className={`${linkStyles}`}>
        <ThemeToggler />
      </Link>

      {!user ? (
        <Link href={"/sign-in"} className={`${linkStyles}`}>
          <UserRound size={20} />
        </Link>
      ) : (
        <Link href={"/profile"} className={`${linkStyles}`}>
          <UserRoundCheck size={20} />
        </Link>
      )}

      <Link href={"/cart"} className={`flex gap-2`}>
        <ShoppingBag
          size={20}
          className="hover:text-orangeColor transition-all hover:dark:text-darkBlueColor"
        />
        {itemAmount > 0 && (
          <span className="absolute right-5 top-4 max-[390px]:right-2 bg-white border-2 border-darkBlueColor py-[1px] px-[6px] rounded-full text-primary text-[12px] transition-all">
            {itemAmount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default SettingsHeader;
