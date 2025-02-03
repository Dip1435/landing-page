import Image from "next/image";

const TIffinApp = () => {
  return (
    <div className="container mx-auto border-none flex flex-col md:flex-row sm:h-[614px] h-full my-8 rounded-3xl bg-[#FEAF0D1A]">
      <div className="md:w-1/2 flex flex-col items-start justify-center p-5 space-y-3">
        <p className="text-lg font-medium text-[#FEAE0D]">DOWNLOAD APP</p>
        <h1 className="text-3xl md:text-4xl font-[Rubik] text-[#010F1C]">
          DOWNLOAD HEALTHY
        </h1>
        <h1 className="text-3xl md:text-4xl font-[Rubik] text-[#010F1C]">
          TIFFIN APP
        </h1>

        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <div className="flex space-x-3">
          <Image
            src="/Rounded rectangle.png"
            alt="image-1"
            width="200"
            height="100"
            className="w-[120px] md:w-[200px]"
          />
          <Image
            src="/Rectangle.png"
            alt="image-2"
            width="200"
            height="100"
            className="w-[120px] md:w-[200px]"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col sm:items-start items-center justify-center p-5 space-y-3">
        <div className="relative">
          <Image
            className="w-[200px] md:w-[250px] h-[400px] md:h-[505px]"
            src="/Silver-1.png"
            alt="tiffin image"
            width="249"
            height="504"
          />
          <Image
            className="w-[180px] md:w-[224px] h-[380px] md:h-[483px] absolute top-[3%] left-[6%] object-cover rounded-lg"
            src="/Home (1) 1.png"
            alt="tiffin image"
            width="209"
            height="423"
          />
        </div>
      </div>
    </div>
  );
};

export default TIffinApp;
