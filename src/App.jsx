import "./index.css";
import axios from "axios";
import { useState } from "react";
import download from "downloadjs";
import { IoMdClose } from "react-icons/io";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Loading from "./components/Loading";

const App = () => {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const exitPost = () => {
    setPost(null);
    setPostId("");
  };

  const findPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/media`,
        {
          videoUrl: postId,
        },
        { responseType: "json" }
      );
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const downloadPost = async () => {
    try {
      setDownloading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/media/download`,
        {
          videoUrl: postId,
        },
        {
          responseType: "blob",
          onDownloadProgress: (event) => {
            const progress = Math.round((event.loaded / event.total) * 100);
            setProgress(progress);
          },
        }
      );
      return download(res.data, post.id, res.data.type);
    } catch (error) {
      console.log(error);
    } finally {
      setProgress(0);
      setDownloading(false);
    }
  };
  if (downloading) {
    return <Progress progress={progress} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex bg-stone-900 flex-col overflow-y-auto w-screen h-screen">
      <Navbar exitPost={exitPost} />
      <div className="flex w-full my-7 h-full justify-center items-center">
        {post ? (
          <div className="flex bg-black text-white flex-col w-80 cursor-default">
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
                  className="hover:bg-stone-900 aspect-square flex justify-center items-center rounded-full"
                >
                  <IoMdClose className="text-white m-1 text-3xl" />
                </button>
              </div>
            </div>
            <div className="aspect-[9/12] w-full relative flex items-center">
              <img
                src={post.cover}
                className="w-full h-full object-cover object-center img-noselect"
                alt=""
              />
            </div>

            <div className="flex flex-row w-full p-2">
              <h2 className="text-sm font-light">
                {post.likes.toLocaleString("en-US")} likes
              </h2>
            </div>
            <button
              disabled={downloading}
              onClick={downloadPost}
              className="bg-stone-800 font-light p-2 rounded-sm transition-all duration-300 hover:text-primary"
            >
              Download Post
            </button>
          </div>
        ) : (
          <div className="w-3/4 sm:w-3/5 lg:w-2/5 flex space-y-3 flex-col justify-center items-center">
            <Logo />
            <form
              onSubmit={findPost}
              className="flex space-y-3 w-full flex-col text-white"
            >
              <input
                className="w-full h-9 placeholder:text-stone-400 bg-stone-800 p-2 outline-none"
                placeholder="Tiktok Video Url"
                type="text"
                required
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
              />
              <button
                type="submit"
                className="bg-stone-800 p-2 rounded-sm transition-all duration-300 hover:text-primary"
              >
                Get Post
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
