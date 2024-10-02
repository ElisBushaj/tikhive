import React from "react";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages";

const App = () => (
	<React.Fragment>
		<Home />
		<Toaster />
	</React.Fragment>
);

export default App;
