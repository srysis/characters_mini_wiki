import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./Layout.jsx"

import Home from "./pages/home.jsx"
import Alice from "./pages/alice.jsx"
import Jane from "./pages/jane.jsx"
import Pandemonica from "./pages/pandemonica.jsx"
import Willow from "./pages/willow.jsx"

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />} >
					<Route path="/" element={<Home />} />
					<Route path="/alice" element={<Alice />} />
					<Route path="/jane" element={<Jane />} />
					<Route path="/pandemonica" element={<Pandemonica />} />
					<Route path="/willow" element={<Willow />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
