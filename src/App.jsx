import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./Componant/Footer";
import Login from "./pages/Login";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Details />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;