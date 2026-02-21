import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const Logo = () => {
  const name = "TikHive";
  return (
    <div className="flex flex-col select-none">
      <div className="relative flex justify-center items-center w-full">
        <img
          src={logo1}
          className="object-contain w-16 aspect-square animate-animate absolute"
          alt=""
        />
        <img
          src={logo2}
          className="object-contain w-16 aspect-square"
          alt=""
        />
      </div>
      <div className="relative flex font-poppins justify-center items-center w-full h-24 text-7xl">
        <h2 className="absolute text-stroke-2 text-transparent">{name}</h2>
        <h2 className="absolute text-primary animate-animate">{name}</h2>
      </div>
    </div>
  );
};

export default Logo;
