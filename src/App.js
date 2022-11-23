import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import VaccineList from "./components/VaccineList";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>

				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Navbar></Navbar>
							<VaccineList />
						</PrivateRoute>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
