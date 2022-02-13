import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './components/pages/Login/Login';
import Requestaccess from './components/pages/Requestaccess/Requestaccess';

const AppView = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/requestaccess" element={<Requestaccess />} />
			</Routes>
		</BrowserRouter>
	);
};

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
