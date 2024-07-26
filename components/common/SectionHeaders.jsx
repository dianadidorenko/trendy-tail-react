import Image from "next/image";

const SectionHeaders = ({ mainHeader }) => {
  return (
    <div className="text-center flex flex-col items-center py-[70px] xs:py-[30px]">
      <Image src={"/icons/heart-icon.svg"} width={86} height={73} alt="Icon" />
      <h2 className="font-extrabold uppercase text-xl font-orelegaOne">
        {mainHeader}
      </h2>
    </div>
  );
};

export default SectionHeaders;
