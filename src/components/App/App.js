import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: 'state message'
		};
	}

	render() {
		let Child = this.props.route;
		return (
			<div>
				<h2>App</h2>
				<p>Message: {this.state.msg}</p>
				{this.props.children}
			</div>
		);
	}
}

export default App;
