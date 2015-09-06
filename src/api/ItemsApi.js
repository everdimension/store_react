import http from '../core/HttpClient';

const ItemsApi = {
	get: () => http.get('api/items')
};

export default ItemsApi;
