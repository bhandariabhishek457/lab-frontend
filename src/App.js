import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Navbar from "./components/commons/Navbar";
import Register from "./components/auth/Register";
import VaccineList from "./components/vaccines/VaccineList";
import PrivateRoute from "./components/auth/PrivateRoute.js";

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
