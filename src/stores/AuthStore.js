import dispatcher from '../core/dispatcher';
import { EventEmitter } from 'events';

let _user = null;
let _isLoading = false;
let _errorMsg = '';

function handleLoginSuccess(data) {
	localStorage.setItem('token', data.token);
	localStorage.setItem('user', JSON.stringify(data.user));

	_user = data.user;
	_errorMsg = '';
}

function handleAuth() {
	if (localStorage.getItem('token')) {
		_user = JSON.parse(localStorage.getItem('user'));
		return true;
	}

	return false;
}

function handleLogout() {
	delete localStorage.token;
	delete localStorage.user;
	_user = null;
}

function handleLoginFail(err) {
	_user = null;
	_errorMsg = err.message;
}

function getUser() {
	return _user;
}

class AuthStore extends EventEmitter {
	getState () {
		let user = getUser();
		return {
			user,
			isAuthenticated: !!user,
			isLoading: _isLoading,
			errorMsg: _errorMsg
		};
	}

	emitChange () {
		this.emit('change');
	}

	listen (callback) {
		this.on('change', callback);
	}

	unlisten (callback) {
		this.removeListener('change', callback);
	}

}

const authStore = new AuthStore();

dispatcher.register(function (action) {
	if (action.type === 'LOGIN_SUCCESS') {
		handleLoginSuccess(action.payload);

	} else if (action.type === 'LOGIN_FAIL') {
		handleLoginFail(action.payload);

	} else if (action.type === 'AUTH') {
		handleAuth();

	} else if (action.type === 'LOGOUT') {
		handleLogout();

	} else {
		// do nothing
		return;
	}

	authStore.emitChange();

});

export default authStore;
