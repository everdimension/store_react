import React from 'react';
import Navbar from 'components/Navbar';
import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthActions';
import './App.less';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = AuthStore.getState();
		console.log(this.state);
		this.state.msg = 'app state message';
		this.onStoreChange = this.onStoreChange.bind(this);
	}

	componentDidMount() {
		AuthStore.listen(this.onStoreChange);
	}

	componentWillUnmount() {
		AuthStore.unlisten(this.onStoreChange);
	}

	onStoreChange() {
		this.setState({
			user: AuthStore.getState().user
		});
		console.log('auth state', AuthStore.getState());

	}

	handleLogout() {
		AuthActions.logout();
		window.location.hash = 'login';
	}

	render() {
		console.log('state of app', this.state);
		return (
			<div>
				<Navbar user={this.state.user} onLogout={this.handleLogout.bind(this)} />
				<div className="container">
					<h2>App is...</h2>
					<p className="lead">Message: <i>{this.state.msg}</i></p>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
