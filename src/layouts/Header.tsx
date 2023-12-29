import { FaGlobeEurope } from "react-icons/fa";
export function Header() {
  return (
    <div className=" flex justify-center items-center w-full h-[55px]  bg-[#f55959] gap-1">
      <FaGlobeEurope color="white" size={24} />
      <h1 className=" h-4 text-white text-sm font-medium font-Inter">
        My travel journal.
      </h1>
    </div>
  );
}
