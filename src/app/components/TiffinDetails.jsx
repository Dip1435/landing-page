import Image from "next/image";

const TiffinDetails = () => {
  return (
    <div className="container mx-auto flex flex-col xl:flex-row p-12 md:space-x-8">
      <Image
        src="/image 89.png"
        alt="tiffin image"
        width={549}
        height={580}
        className="w-full md:w-[549px] h-auto"
      />
      <div className="mt-2 flex flex-col justify-between items-start gap-4 flex-wrap">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Tiffin Delights for{" "}
          <span className="text-4xl md:text-5xl font-bold text-[#016339]">
            Your
          </span>
          <p className="text-4xl md:text-5xl font-bold text-[#016339]">
            Wellness
          </p>
        </h1>
       
        <p className="text-sm md:text-base">
          Our menu at Healthy Tiffin presents a variety of dishes from across
          India, each with its unique flavor and health benefits. It's about
          wrapping the comfort and nostalgia of our rich culinary heritage in a
          box and bringing it to the modern dining table.
        </p>
        <div className="flex space-x-5">
          <div
            className="h-7 w-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FEAF0D" }}
          >
            1
          </div>
          <p className="text-lg font-bold text-black">Trustworthy</p>
        </div>
        <div className="flex space-x-5">
          <div
            className="h-7 w-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FEAF0D" }}
          >
            2
          </div>
          <p className="text-lg font-bold text-black">Cheap & Secure</p>
        </div>

        <p className="text-sm md:text-base">
          Your health is our paramount concern. We meticulously balance each
          meal to fulfill daily nutritional needs—protein, vegetables, healthy
          carbs, fiber, good fats, and probiotics, all while keeping the calorie
          count between 450 to 650 per serving.
        </p>
        <div>
          <button
            style={{ backgroundColor: "#FEAF0D" }}
            className="mt-6 text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiffinDetails;
