import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-stone-900">
      <CircleLoader color="#fd3e3e" />
    </div>
  );
};

export default Loading;
