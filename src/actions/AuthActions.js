import dispatcher from '../core/dispatcher';
import AuthApi from '../api/AuthApi';

const AuthActions = {
	login: function (credentials) {
		this.dispatchLoading(true);

		AuthApi.login(credentials)
			.then((res) => {
				console.log('login res', res);
				this.dispatchLoading(false);
				dispatcher.dispatch({
					type: 'LOGIN_SUCCESS',
					payload: res
				});
			})
			.catch((err, res) => {
				console.warn('login err', err, typeof err, res);
				this.dispatchLoading(false);
				dispatcher.dispatch({
					type: 'LOGIN_FAIL',
					payload: err
				});
				throw err;
			});
	},

	logout: function () {
		dispatcher.dispatch({
			type: 'LOGOUT',
			payload: null
		});
	},

	auth: function () {
		dispatcher.dispatch({
			type: 'AUTH',
			payload: null
		});
	},

	dispatchLoading: function(isLoading) {
		dispatcher.dispatch({
			type: 'LOADING_LOGIN',
			payload: {
				loading: isLoading
			}
		});
	}
};

export default AuthActions;
