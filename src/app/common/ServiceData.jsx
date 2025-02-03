import Image from "next/image";

const ServiceData = ({img , alt , text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={img} alt={alt} width="149" height="149" />
      <p className="font-[Montserrat] text-[#5B5B5B]">{text}</p>
    </div>
  );
};

export default ServiceData;
