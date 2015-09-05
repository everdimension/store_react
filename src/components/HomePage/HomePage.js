import React from 'react';
import ItemsContainer from '../Items';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div>Home page body. Go to <a href="#login">Login page</a></div>
				<br />
				<br />
				<ItemsContainer />
			</div>
		);
	}
}

export default HomePage;
