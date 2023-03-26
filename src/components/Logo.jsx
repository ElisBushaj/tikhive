const Logo = () => {
  const name = "TikHive";
  return (
    <div className="flex flex-col select-none">
      <div className="relative flex justify-center items-center w-full">
        <img
          src={require("../assets/logo1.png")}
          className="object-contain w-16 aspect-square animate-animate absolute"
          alt=""
        />
        <img
          src={require("../assets/logo2.png")}
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
