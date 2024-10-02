import { IoMdClose } from "react-icons/io";

const Post = ({ post, progress, downloadPost, exitPost }) => {
	return (
		<div className="flex text-white flex-col w-80 cursor-default border p-4 border-slate-900 rounded-2xl">
			<div className="flex space-x-2 justify-center items-center flex-row w-full p-2">
				<img
					src={post.avatar}
					className="h-10 aspect-square rounded-full img-noselect"
					alt=""
				/>
				<div className="w-full h-full flex flex-row items-center justify-between">
					<h3>{post.username}</h3>
					<button
						onClick={exitPost}
						className="hover:bg-slate-900 aspect-square flex justify-center items-center rounded-full"
					>
						<IoMdClose className="text-white m-1 text-3xl" />
					</button>
				</div>
			</div>
			<div className="aspect-[9/12] w-full relative flex items-center">
				<img
					src={post.cover}
					className="w-full h-full object-cover object-center img-noselect rounded-md"
					alt=""
				/>
			</div>

			<div className="flex flex-row w-full p-2">
				<h2 className="text-sm font-light">
					{post.likes?.toLocaleString("en-US")} likes
				</h2>
			</div>
			<button
				disabled={progress > 0}
				onClick={downloadPost}
				className="bg-slate-800 font-light p-2 transition-all duration-300 hover:text-primary rounded-md"
			>
				Download Post
			</button>
		</div>
	);
};

export default Post;
