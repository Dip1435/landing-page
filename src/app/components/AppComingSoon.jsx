import Image from "next/image";
import Button from "../common/Button";

const AppComingSoon = () => {
  return (
    <div
      className="relative container mx-auto flex flex-col md:flex-row h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('Rectangle 101922.png')" }}
    >
      <div className="relative z-10 flex flex-col items-start justify-start m-8">
        <h1 className="text-[48px] md:text-[64px] font-semibold text-[#00633A]">
          TRACK YOUR
        </h1>
        <h1 className="text-[60px] md:text-[80px] font-light text-[#00633A]">
          FITNESS GOALS
        </h1>
        <div className="mt-4 flex flex-wrap justify-center md:justify-between gap-4">
          {[
            {
              img: "/IMG_2299 4.png",
              text: "Calories",
            },
            {
              img: "/IMG_2299 4.png",
              text: "Weight",
            },
            {
              img: "/IMG_2299 2.png",
              text: "Water",
            },
            {
              img: "/IMG_2299 3.png",
              text: "Sleep",
            },
            {
              img: "/IMG_2299 1.png",
              text: "Steps",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white px-3 py-2 rounded-lg shadow-md text-black font-medium flex sm:flex-nowrap flex-wrap justify-center items-center"
            >
              <Image
                className="me-1"
                src={item.img}
                width="30"
                height="30"
                alt={item.text}
              />
              {item.text}
            </div>
          ))}
        </div>

        <p className="mt-4 text-black text-sm md:text-base text-wrap">
          With the upcoming release of our app, managing your health has never
          been easier. From scheduling meals to consulting with dietitians and
          tracking health goals, daily fitness and meditation classes, Healthy
          Tiffin puts your well-being at the forefront of everything we do.
        </p>

        <Button name={"App Coming Soon"} className="mt-4" />
      </div>
    </div>
  );
};

export default AppComingSoon;
