import React from 'react';
import ItemsContainer from '../Items';

class HomePage extends React.Component {
	render() {
		return (
			<ItemsContainer />
		);
	}
}

HomePage.requiresLogin = true;

export default HomePage;
