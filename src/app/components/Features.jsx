import ServiceData from "../common/ServiceData";

const Features = () => {
  return (
    <div className="container mx-autos h-auto">
      <h1 className="font-[Montserrat] bg-[#00633A] p-4 text-[28px] sm:text-[32px] tracking-tight font-bold text-white text-center">
        Fresh{" "}
        <span className="text-[24px] sm:text-[32px] font-extralight">
          healthy tiffin delivered
        </span>{" "}
        daily
      </h1>

      <div className="flex flex-wrap items-center justify-between px-20 gap-8 m-8">
        <ServiceData
          img={"/sr1.png"}
          alt={"image1"}
          text={"Made Fresh Daily"}
        />
        <ServiceData img={"/sr2.png"} alt={"image2"} text={"Veg, Non-veg"} />
        <ServiceData img={"/sr3.png"} alt={"image3"} text={"Delivered Daily"} />
        <ServiceData img={"/sr4.png"} alt={"image4"} text={"Zero Plastic"} />
        <ServiceData img={"/sr5.png"} alt={"image5"} text={"Ayurved"} />
        <ServiceData
          img={"/sr6.png"}
          alt={"image6"}
          text={"Track Fitness Goal"}
        />
      </div>
    </div>
  );
};

export default Features;
