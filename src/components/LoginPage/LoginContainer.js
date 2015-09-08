import React from 'react';

import AuthActions from '../../actions/AuthActions';
import AuthStore   from '../../stores/AuthStore';
import LoginForm   from './LoginForm';

class LoginContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = AuthStore.getState();
		this.onStoreChange = this.onStoreChange.bind(this);
	}

	componentDidMount() {
		AuthStore.listen(this.onStoreChange);
	}
	componentWillUnmount() {
		AuthStore.unlisten(this.onStoreChange);
	}

	render() {
		return (
			<LoginForm
				onSubmit={this.onLoginAttempt.bind(this)}
				isAuthenticated={this.state.isAuthenticated}
				err={this.state.errorMsg}
			/>
		);
	}

	onLoginAttempt(credentials) {
		AuthActions.login(credentials);
	}

	onStoreChange() {
		this.setState(AuthStore.getState());
		if (this.state.isAuthenticated) {
			window.location.hash = '';
		}
	}
}

export default LoginContainer;
