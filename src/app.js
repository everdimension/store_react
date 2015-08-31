import React from 'react';
import App from 'components/App';
import router from './router';

function getRouteComponent(routeName) {
	return componentsMap[routeName] || componentsMap.home;

}

router.onChange(function(RouteComponent) {
	React.render(
		(
			<App>
				<RouteComponent />
			</App>
		),
		document.getElementById('app-root')
	);
});
