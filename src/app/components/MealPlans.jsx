import Image from "next/image";
import Button from "../common/Button";

const MealPlans = () => {
  return (
    <div
      className="relative container mx-auto h-auto flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Rectangle 101922-1.png')" }}
    >
      <div className="absolute inset-0 bg-black/15"></div>

      <div className="relative z-10 my-8 sm:p-0 p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          4 TIER PORTION CONTROLLED TIFFIN
        </h1>
        <h2 className="text-[40px] sm:text-[51px] font-light mt-2 text-[#5B5B5B]">
          DELIVERED TO DOORSTEP DAILY
        </h2>

        <div className="mt-4 flex flex-wrap justify-center sm:gap-6 gap-3">
          {[
            {
              icon: "/icons.png",
              name: "Tiffin Service",
            },
            {
              icon: "/icons (1).png",
              name: "Healthy Food",
            },
            {
              icon: "/icons (2).png",
              name: "Weekly Meal Planning",
            },
            {
              icon: "/icons (1).png",
              name: "Doorstep Delivery",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white px-4 py-2 rounded-lg shadow-md text-black font-medium flex items-center justify-center w-full sm:w-auto"
            >
              <Image
                src={item?.icon}
                className="me-2"
                alt="tiffin image"
                width="20"
                height="20"
              />
              {item?.name}
            </div>
          ))}
        </div>

        <p className="mt-4 text-black text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <Button name={"Sign Up Now"} />
      </div>
    </div>
  );
};

export default MealPlans;
