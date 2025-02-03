import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Quality = () => {
  return (
    <div
      className="container mx-auto p-8"
      style={{ backgroundColor: "#00633A" }}
    >
      <div className="flex flex-col gap-10 sm:px-14 px-0">
        <h2 className="text-lg md:text-xl font-[Playfair_Display] text-center text-white">
          Your Health Is Our Priority!
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {[
            "Made fresh daily 👩‍🌾",
            "Homestyle regional  🇮🇳",
            "Rotating menu 📆",
            "Organic/non GMO 🌿",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white px-5 py-2 rounded-lg shadow-md text-black font-medium flex justify-center items-center w-full sm:w-auto"
            >
              <CheckCircleIcon className="h-5 w-5 me-1 text-yellow-400" />{" "}
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {[
            "Less oil 🌶️",
            "Balanced calories 🍽️",
            "Ayurvedic 🧘",
            "Green ♻️",
            "Wt.Mgmt 📉",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white px-5 py-2 rounded-lg shadow-md text-black font-medium flex justify-center items-center w-full sm:w-auto"
            >
              <CheckCircleIcon className="h-5 w-5 me-1 text-yellow-400" />{" "}
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
