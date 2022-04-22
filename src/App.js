import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/headerComponents/Header";
import HeroComp from "./component/homeComponents/HeroComp";
import Home from "./component/homeComponents/Home";
import Register from "./Holder/Register/Register";
import SignIn from "./Holder/Register/SignIn";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
