import HomePage from 'components/HomePage';
import LoginPage from 'components/LoginPage';
import AuthStore from 'stores/AuthStore';

const paths = {
	home: HomePage,
	login: LoginPage
};

class Router {
	constructor() {
		this.routeName = window.location.hash.substr(1) || 'home';
		this.renderFn = null;
		window.addEventListener('hashchange', this.onRouteChange.bind(this));
	}

	onChange(renderFn) {
		this.renderFn = renderFn;
		this.onRouteChange.call(this);
	}

	onRouteChange() {
		this.routeName = window.location.hash.substr(1);
		let routeComponent = paths[this.routeName] || paths.home;

		if (routeComponent.requiresLogin && !AuthStore.getState().isAuthenticated) {
			console.warn('unauthorized!');
			window.location.hash = 'login';

		} else {
			this.renderFn(routeComponent);
		}

	}
}

export default new Router();
