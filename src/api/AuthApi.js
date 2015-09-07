import http from '../core/HttpClient';

const AuthApi = {
	login: (credentials) => http.post('api/auth/login', credentials)
};

export default AuthApi;
