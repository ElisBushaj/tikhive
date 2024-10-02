const Navbar = ({ handleLogoClick = () => {} }) => (
	<nav className="select-none relative flex w-full">
		<div onClick={handleLogoClick} className="cursor-pointer p-1 m-4">
			<img
				src={require("../../assets/logo3.png")}
				className="object-contain w-28 animate-animate absolute"
				alt=""
			/>
			<img
				src={require("../../assets/logo.png")}
				className="object-contain w-28"
				alt=""
			/>
		</div>
	</nav>
);

export default Navbar;
