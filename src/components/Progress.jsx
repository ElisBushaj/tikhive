import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const Progress = ({ progress }) => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="space-y-1">
        <div className="relative flex justify-center items-center w-full">
          <img
            src={logo1}
            className="object-contain w-44 aspect-square animate-animate absolute"
            alt=""
          />
          <img
            src={logo2}
            className="object-contain w-44 aspect-square"
            alt=""
          />
        </div>

        <div className="w-80 bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h2 className="text-primary transition-all font-medium duration-300">
          {progress}%
        </h2>
      </div>
    </div>
  );
};

export default Progress;
