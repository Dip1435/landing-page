import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-between gap-6 p-14">
        <div className="w-full sm:w-[359px] space-y-3">
          <Image src="/logo.png" width="108" height="91" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            libero?
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-[123px]">
          <p className="text-black font-bold text-base">Quick links</p>
          <a className="cursor-pointer" href="#">
            Home
          </a>
          <a className="cursor-pointer" href="#">
            About
          </a>
          <a className="cursor-pointer" href="#">
            Recipies
          </a>
          <a className="cursor-pointer" href="#">
            Contact Us
          </a>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-[188px]">
          <p className="text-black font-bold text-base">Useful links</p>
          <a className="cursor-pointer" href="#">
            FAQ
          </a>
          <a className="cursor-pointer" href="#">
            Privacy Policy
          </a>
          <a className="cursor-pointer" href="#">
            Terms & Conditions
          </a>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-[276px]">
          <p className="text-black font-bold text-base">Contact Info</p>
          <p>Lorem, ipsum dolor, 69570, New York, USA</p>
          <p>demouser@gmail.com</p>
          <p>(+10)123-345-4587</p>
        </div>

        <div className="w-full border-t-[1px] text-center pt-2 text-sm mt-6">
          Copyright © 2023. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
