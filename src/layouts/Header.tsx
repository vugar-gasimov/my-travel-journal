import { FaGlobeEurope } from "react-icons/fa";
export function Header() {
  return (
    <div className=" flex justify-center items-center w-full lg:h-[110px] h-[55px]  bg-[#f55959] lg:gap-2 gap-1">
      <FaGlobeEurope className="text-white text-3xl text-[24px] lg:text-[36px]" />
      <h1 className=" text-white lg:text-[30px] text-[15px] font-medium font-Inter">
        My travel journal.
      </h1>
    </div>
  );
}
