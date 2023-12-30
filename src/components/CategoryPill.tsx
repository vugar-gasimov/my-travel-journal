import { FaLocationDot } from "react-icons/fa6";

type CategoryPillProps = {
  id: number;
  country: string;
  info: string;
  title: string;
  description: string;
  time: string;
  coverImg: string; // Assuming coverImg is a string URL
};

export function CategoryPill(pill: CategoryPillProps) {
  const { country, info, title, description, time, coverImg } = pill;
  return (
    <section className="flex justify-center flex-col  items-center">
      <div className="flex justify-center  flex-row  gap-5 lg:w-full w-478 lg:mb-4 lg:mt-4 mb-2 mt-2 bg-cover">
        <img
          className="lg:w-[270px] lg:h-[360px] w-[125px] h-[168px] rounded-[5px] object-cover"
          src={coverImg}
          alt="Countries image"
        />
        <div className="flex justify-start flex-col ">
          <p className="flex gap-1 h-2.5 text-gray-800 lg:text-[21px] text-[10.24px] font-normal font-['Inter'] tracking-widest lg:mb-4 mb-2">
            <FaLocationDot color="red" /> {country}
            <a
              href="example.com"
              className=" h-[13px] text-neutral-400 lg:text-[21px] text-[10.24px] font-normal font-['Inter'] underline"
            >
              {info}
            </a>
          </p>
          <h1 className="lg:w-[436px] w-[326px]  text-gray-800 lg:text-[45px] text-[25px] font-bold font-['Inter'] lg:mb-8 mb-4  lg:tracking-[-2px]">
            {title}
          </h1>
          <h2 className="w-[319px]  text-gray-800 lg:text-[21px] text-[10.24px] font-bold font-['Inter'] lg:mb-4 mb-2">
            {time}
          </h2>
          <p className=" lg:w-[436px] w-[326px] text-gray-800 lg:text-[21px] text-[10.24px] font-normal font-['Inter'] leading-none">
            {description}
          </p>
        </div>
      </div>
      <div className=" lg:w-[900px] w-[478px] h-[0px] border border-neutral-100"></div>
    </section>
  );
}
