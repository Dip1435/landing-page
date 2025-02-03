const Button = ({name}) => {
  return (
    <button className="mt-6 bg-[#00633A] text-white font-bold px-[15px] py-[14px] rounded-[10px] shadow-md hover:bg-green-700 transition">
      {name}
    </button>
  );
};

export default Button;
