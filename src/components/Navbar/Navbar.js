import React from 'react';
import './Navbar.less';

class Navbar extends React.Component {
	// TODO:
	// expect session info in props

	render() {
		console.log('props of navbar', this.props);
		let loginElement = this.props.user ? null : <li><a href="#login">Login</a></li>;
		let signupElement = this.props.user ? null : <li><a href="#">Signup</a></li>;

		let userEmailElement = this.props.user ? <li ng-show="Session.user" className="text-item">{this.props.user.email}</li> : null;
		let logoutElement = this.props.user ?
			<li ng-show="Session.user"><a href="#" onClick={this.props.onLogout}>logout</a></li> :
			null;

		return (
			<header className="Navbar header">
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<nav>
								<ul className="Navbar__nav">
									<li><a className="first" href="#">Home</a></li>
									{loginElement}
									{signupElement}

									{userEmailElement}
									{logoutElement}
								</ul>
							</nav>
						</div>
						<div className="col-xs-4">
							<p style={{color: 'white'}}>cart...</p>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

Navbar.propTypes = {
	user: React.PropTypes.object,
	onLogout: React.PropTypes.func
};

export default Navbar;
