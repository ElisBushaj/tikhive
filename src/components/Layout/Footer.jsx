import pg from "../../../package.json"; // adjust the path as needed

const TOOLS = [
	{
		name: "TubeHive - YouTube MP3 Downloader",
		url: "/",
	},
	{
		name: "TikHive - TikTok Video Downloader",
		url: "https://tikhive.netlify.app/",
	},
];

const Footer = () => (
	<footer className="flex flex-col text-white">
		<div className="flex flex-wrap justify-between md:justify-normal px-4 py-6 sm:px-14 md:space-x-28 lg:space-x-32 bg-gradient-to-b from-black to-gray-950">
			<div className="mb-5 md:mb-3 mr-6 md:mr-0 flex-col flex ">
				<h3 className="text-lg font-bold mb-2">Tools</h3>
				<div className="flex flex-col text-slate-300">
					{TOOLS.map((tool, index) => (
						<a
							key={index}
							className="hover:text-primary duration-300 transition-colors"
							href={tool.url}
						>
							{tool.name}
						</a>
					))}
				</div>
			</div>
		</div>
		<div className="flex flex-col items-center justify-center py-4 space-y-2 text-sm bg-gray-950">
			<p>We are not affiliated with TikTok.</p>
			<p>TikHive {pg.version}. All rights reserved.</p>
		</div>
	</footer>
);

export default Footer;
