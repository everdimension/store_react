import React from 'react';
import './Navbar.less';

class Navbar extends React.Component {
	// TODO:
	// expect session info in props

	render() {
		return (
			<header className="Navbar header">
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<nav>
								<ul className="Navbar__nav">
									<li><a className="first" href="#">Home</a></li>
									<li ng-hide="Session.user"><a href="#login">Login</a></li>
									<li ng-hide="Session.user"><a href="#">Signup</a></li>
									<li ng-show="Session.user" className="text-item">Session.user.email</li>
									<li ng-show="Session.user"><a href="#">logout</a></li>
								</ul>
							</nav>
						</div>
						<div className="col-xs-4" ng-show="Session.user">
							<sw-cart></sw-cart>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
