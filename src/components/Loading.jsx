import { CircleLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<CircleLoader color="#fd3e3e" />
		</div>
	);
};

export default Loading;
