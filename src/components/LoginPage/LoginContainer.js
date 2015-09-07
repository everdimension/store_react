import React from 'react';
import LoginForm from './LoginForm';
import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = AuthStore.getState();
		this.onStoreChange = this.onStoreChange.bind(this);
	}

	componentWillMount() {
		AuthStore.listen(this.onStoreChange);
	}
	componentWillUnmount() {
		AuthStore.unlisten(this.onStoreChange);
	}

	render() {
		return (
			<LoginForm
				onLogin={this.onLogin.bind(this)}
				isAuthenticated={this.state.isAuthenticated}
				err={this.state.errorMsg} />
		);
	}

	onLogin(credentials) {
		AuthActions.login(credentials);
	}

	onStoreChange() {
		this.setState(AuthStore.getState());
	}
}

export default LoginContainer;
