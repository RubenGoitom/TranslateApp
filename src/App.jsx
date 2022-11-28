import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartupPage from "./components/StartupPage";
import ProfilePage from "./components/ProfilePage";
import TranslationPage from "./components/TranslationPage";
import Navigation from "./components/Nav";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />
				<main>
					<Routes>
						<Route path="/" element={<StartupPage />} />
						<Route path="/translate" element={<TranslationPage />} />
						<Route path="/profile" element={<ProfilePage />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
