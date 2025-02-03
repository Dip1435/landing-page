import Image from "next/image";

const Meal = ({img , alt , text , className}) => {
  return (
    <div className={className}>
      <Image className="" src={img} alt={alt} width="220" height="200" />
      <p className="mt-2 font-bold text-[15px]">{text}</p>
    </div>
  );
};

export default Meal;
