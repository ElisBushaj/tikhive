import React, { useState } from "react";
import { Layout, Progress, Loading } from "../components";
import download from "downloadjs";
import axios from "axios";
import Post from "../components/Post";
import Form from "../components/Form";
import { toast } from "react-hot-toast";

const Home = () => {
	const [videoUrl, setVideoUrl] = useState("");
	const [post, setPost] = useState();
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);

	const exitPost = () => {
		setPost(null);
		setVideoUrl("");
	};

	const findPost = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axios.post(`${process.env.REACT_APP_API}/media`, {
				videoUrl: videoUrl,
			});
			setPost(res.data);
		} catch (error) {
			const message = error?.response?.data?.error || "An error occurred";
			toast.error(`Failed to find post, reason: ${message}`);
		}
		setLoading(false);
	};

	const downloadPost = async () => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API}/media/download`,
				{
					videoUrl: videoUrl,
				},
				{
					responseType: "blob",
					onDownloadProgress: (event) => {
						const progress = Math.round(
							(event.loaded / event.total) * 100
						);
						setProgress(progress);
					},
				}
			);
			download(res.data, post.id, res.data.type);
		} catch (error) {
			const message = error?.response?.data?.error || "An error occurred";
			toast.error(`Failed to download post, reason: ${message}`);
		}

		setProgress(0);
		toast.success("Download completed!");
	};

	if (progress > 0) {
		return <Progress progress={progress} />;
	}

	if (loading) {
		return <Loading />;
	}
	return (
		<Layout
			options={{
				navBar: {
					handleLogoClick: exitPost,
				},
			}}
		>
			{post ? (
				<Post
					post={post}
					progress={progress}
					downloadPost={downloadPost}
					exitPost={exitPost}
				/>
			) : (
				<Form
					videoUrl={videoUrl}
					setVideoUrl={setVideoUrl}
					findPost={findPost}
				/>
			)}
		</Layout>
	);
};

export default Home;
