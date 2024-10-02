import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
const Layout = ({ children, options: { navBar } }) => (
	<React.Fragment>
		<Navbar {...navBar} />
		<main className="min-h-[80vh] my-7 w-full flex justify-center items-center">
			{children}
		</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
