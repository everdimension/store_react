import React from 'react';
import LoginContainer from './LoginContainer';

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<h4>Login page body. Go to <a href="#">the home page</a></h4>

				<div className="row">
					<div className="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
						<LoginContainer />
					</div>
				</div>

			</div>
		);
	}
}

export default LoginPage;
