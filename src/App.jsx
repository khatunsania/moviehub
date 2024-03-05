import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./Componant/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Details />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
