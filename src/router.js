import HomePage from 'components/HomePage';
import LoginPage from 'components/LoginPage';

const routes = {
	home: HomePage,
	login: LoginPage
};

class Router {
	constructor() {
		this.routeName = window.location.hash.substr(1) || 'home';
		this.routes = routes;
		this.renderFn = null;
		window.addEventListener('hashchange', this.onRouteChange.bind(this));
	}

	onChange(renderFn) {
		this.renderFn = renderFn;
		this.onRouteChange.call(this);
	}

	onRouteChange() {
		this.routeName = window.location.hash.substr(1);
		let routeComponent = this.routes[this.routeName] || this.routes.home;
		this.renderFn(routeComponent);
	}
}

export default new Router();
