import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto h-16 flex justify-between items-center mt-8 p-8">
      <div className="w-64 h-full gap-4 flex items-center">
        <Image
          src="/6ba447f1-c08a-4ebd-b0ec-f595a66186b3 1.png"
          alt="Header image"
          width={66}
          height={66}
        />
        <p className="font-[Montserrat] text-lg text-[#333333]">
          HEALTHY TIFFIN
        </p>
      </div>

      <div className="flex gap-4 font-[Montserrat] sm:text-sm text-xs  text-[#333333]">
        <a className="cursor-pointer" href="#">
          MY CART
        </a>
        <div className="border border-[#333333] h-4 w-0.5 hidden sm:block"></div>{" "}
        <a className="cursor-pointer font-bold" href="#">
          SIGN IN
        </a>
      </div>
    </header>
  );
};

export default Header;
