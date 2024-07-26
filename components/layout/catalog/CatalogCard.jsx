import CustomButton from "@/components/elements/Button";
import Image from "next/image";
import Link from "next/link";

const CatalogCard = ({ item }) => {
  const images = item.images.map((img) => img);

  return (
    <div className="py-4 px-10 rounded-lg catalogue-item">
      <Link href={`/${item.urlName}`} key={item.id} className="relative">
        <Image
          src={images[0]}
          width={200}
          height={200}
          alt={item.name}
          className="rounded-lg cursor-pointer"
          objectFit={"cover"}
        />
      </Link>

      <div className="flex flex-col items-center gap-2">
        <p className="uppercase font-bold text-[13px] xsSm:text-md">
          {item.info[0].brand}
        </p>
        <h3 className="text-xl sm:text-md xsSm:text-center">{item.name}</h3>
        <p className="flex items-baseline gap-1 text-redColor">
          <span className="">від</span>
          <span className="font-bold text-2xl xsSm:text-md">
            {item.startingPrice}
          </span>
          <span className="font-semibold">₴</span>
        </p>
      </div>

      <div className="flex gap-2 pt-2">
        {item?.sizes.length > 0 &&
          item.sizes.map((size) => (
            <div key={size}>
              <p className="text-lg xsSm:text-sm">{size}</p>
            </div>
          ))}
      </div>

      <div className="relative pt-2">
        <Link href={`/${item.urlName}`}>
          <CustomButton
            text={"Перейти"}
            containerStyles={"w-[150px] h-[45px] text-[15px] xsSm:w-[100px]"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
