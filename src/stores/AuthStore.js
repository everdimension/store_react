import dispatcher from '../core/dispatcher';
import EventEmitter from 'events';

let _user = null;
let _isLoading = false;
let _errorMsg = '';

function handleLoginSuccess(data) {
	localStorage.setItem('token', data.token);
	_user = data.user;
	_errorMsg = '';
}

function handleLoginFail(err) {
	_user = null;
	_errorMsg = err.message;
}

function getUser() {
	return _user;
}

const AuthStore = Object.assign(EventEmitter.prototype, {
	getState: function () {
		let user = getUser();
		return {
			user,
			isAuthenticated: !!user,
			isLoading: _isLoading,
			errorMsg: _errorMsg
		};
	},

	emitChange: function () {
		this.emit('change');
	},

	listen: function (callback) {
		this.on('change', callback);
	},

	unlisten: function (callback) {
		this.removeListener('change', callback);
	}

});

dispatcher.register(function (action) {
	if (action.type === 'LOGIN_SUCCESS') {
		handleLoginSuccess(action.payload);
	} else if (action.type === 'LOGIN_FAIL') {
		handleLoginFail(action.payload);
	} else {
		// do nothing
		return;
	}

	AuthStore.emitChange();

});

export default AuthStore;
