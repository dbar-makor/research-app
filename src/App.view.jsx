import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './components/pages/Login/Login';
import Requestaccess from './components/pages/Requestaccess/Requestaccess';
import Home from './components/pages/Home/Home';

const AppView = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/requestaccess" element={<Requestaccess />} />
			</Routes>
		</BrowserRouter>
	);
};

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
