import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: 'app component'
		};
	}

	render() {
		return (
			<div>
				<h2>App</h2>
				<p>Message: {this.state.msg}</p>
			</div>
		);
	}
}

export default App;
