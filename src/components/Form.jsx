import Logo from "./Logo";

const Form = ({ videoUrl, setVideoUrl, findPost }) => {
	return (
		<div className="w-3/4 sm:w-3/5 lg:w-2/5 flex space-y-3 flex-col justify-center items-center">
			<Logo />
			<form
				onSubmit={findPost}
				className="flex space-y-3 w-full flex-col text-white"
			>
				<input
					className="w-full h-9 placeholder:text-slate-400 bg-slate-800 py-2 px-4 outline-none rounded-md"
					placeholder="Tiktok Video Url"
					type="text"
					required
					value={videoUrl}
					onChange={(e) => setVideoUrl(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-slate-800 p-2 transition-all duration-300 hover:text-primary rounded-md"
				>
					Get Post
				</button>
			</form>
		</div>
	);
};

export default Form;
