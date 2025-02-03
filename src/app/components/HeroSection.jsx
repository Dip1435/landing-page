import Image from "next/image";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="relative container mx-auto flex flex-col-reverse xl:flex-row items-center justify-between p-8 xl:gap-0 gap-2">
      <div className="w-full md:w-[542px] h-auto flex flex-col justify-between text-center xl:text-right">
        <h1 className="text-[40px] md:text-[56px] tracking-widest sm:mt-0 mt-4 font-semibold text-[#00633A]">
          YOUR HEALTHY{" "}
          <span className="text-[#5B5B5B] text-[36px] md:text-[48px] font-normal">
            IS OUR PRIORITY
          </span>
        </h1>
        <div className="flex items-center justify-center xl:justify-end mt-6">
          <Button name={"Sign Up Now"} />
        </div>
      </div>

      <div className="relative w-full max-w-sm ">
        <div className="absolute -z-10 top-2 md:top-4 right-2 md:right-4 w-full h-full border-2 border-green-800 rounded-lg"></div>
        <div className="absolute -z-20 bottom-12 md:bottom-24 -left-6 md:-left-14 w-[120px] md:w-[200px] h-[120px] md:h-[200px] rounded-full border-none bg-[#FEAE0D] opacity-90"></div>

        <Image
          src="/Rectangle 6.png"
          width={500}
          height={500}
          alt="main image"
          className="w-full h-auto"
        />

        <div className="absolute bottom-4 md:bottom-6 -left-8 md:-left-14 rounded-full border-0 border-white overflow-hidden w-[100px] md:w-[200px]">
          <Image
            src="/Rectangle 10.png"
            width={200}
            height={210}
            alt="small image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
