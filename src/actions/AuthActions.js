import dispatcher from '../core/dispatcher';
import AuthApi from '../api/AuthApi';

const AuthActions = {
	login: function (credentials) {
		AuthApi.login(credentials)
			.then((res) => {
				console.log('login res', res);
				dispatcher.dispatch({
					type: 'LOGIN_SUCCESS',
					payload: res
				});
			})
			.catch((err, res) => {
				console.warn('login err', err, typeof err, res);
				dispatcher.dispatch({
					type: 'LOGIN_FAIL',
					payload: err
				});
				throw err;
			});
	}
};

export default AuthActions;
