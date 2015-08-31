import React from 'react';
require('./App.less');

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
			<div className="container">
				<h2>App</h2>
				<p className="lead">Message: <i>{this.state.msg}</i></p>
				{this.props.children}
			</div>
		);
	}
}

export default App;
