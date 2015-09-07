import React from 'react';
import classNames from 'classnames';
import './Login.less';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		};
	}

	handleUsernameChange(evt) {
		this.setState({
			login: evt.target.value
		});
	}
	handlePasswordChange(evt) {
		this.setState({
			password: evt.target.value
		});
	}

	render() {
		let authenticatedElement = this.props.isAuthenticated ? <span className="text-success">login success</span> : null;
		let errorMsg = this.props.err || null;
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<form onSubmit={this.login.bind(this)}>
						<div className="form-group">
							<label htmlFor="login">Your login</label>
							<input value={this.state.login} onChange={this.handleUsernameChange.bind(this)} className="form-control" type="text" id="login" name="login" placeholder="Username" />
						</div>
						<div className="form-group">
							<label htmlFor="logiPassword">Your password</label>
							<input value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="form-control" type="password" id="logiPassword" name="password" placeholder="password" />
						</div>

						<button className="btn btn-primary">submit form</button>

						<br />
						{authenticatedElement}
						<br />
						{errorMsg}
					</form>
				</div>
			</div>
		);
	}

	login(evt) {
		evt.preventDefault();
		console.log(evt, this.state);
		this.props.onLogin(this.state);
	}
}

export default Login;
