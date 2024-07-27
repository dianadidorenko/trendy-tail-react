import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const PagesNav = ({ items }) => {
  const path = useParams();
  const itemName = items.find((item) => path.productId === item.urlName);

  return (
    <div className="flex items-center gap-1 py-2">
      <Link href="/">
        <div className="text-primary/50 flex items-center dark:text-white/50">
          <p>Головна</p>
          <ChevronRight
            size={18}
            className={`${itemName ? "" : "text-primary dark:text-white/90"}`}
          />
        </div>
      </Link>

      {itemName?.name ? (
        <div className="flex items-center gap-1">
          <Link href="/catalog">
            <p
              className={`${
                itemName ? "text-primary/50 dark:text-white/50" : "text-primary"
              }`}
            >
              Каталог
            </p>
          </Link>
          <div className="flex items-center gap-1">
            <ChevronRight
              size={18}
              className={`${
                itemName ? "text-primary dark:text-white/90" : "text-primary/50"
              }`}
            />
            <p className="text-primary dark:text-white/90">{itemName.name}</p>
          </div>
        </div>
      ) : (
        <p className="text-primary flex items-center dark:text-white/90">
          Каталог
        </p>
      )}
    </div>
  );
};

export default PagesNav;
