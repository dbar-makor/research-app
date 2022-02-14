import React, { useState } from 'react';

import HomeView from './Home.view';

const Home = (props) => {
	const [sortBySelectState, setSortBySelectState] = useState('');

	const sortBySelectChangeHandler = (event) => {
		setSortBySelectState(event.target.value);
	};

	return (
		<HomeView sortBySelect={sortBySelectState} sortBySelectChangeHandler={sortBySelectChangeHandler}>
			{props.children}
		</HomeView>
	);
};

Home.displayName = 'Home';
Home.defaultProps = {};

export default React.memo(Home);
