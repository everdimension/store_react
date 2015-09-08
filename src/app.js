import React from 'react';
import App from 'components/App';
import router from './router';
import AuthActions from 'actions/AuthActions';

AuthActions.auth();

const root = document.getElementById('app-root');

router.onChange(function(RouteComponent) {

	React.render(
		(
			<App>
				<RouteComponent />
			</App>
		),
		root
	);
});
