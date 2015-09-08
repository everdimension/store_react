import dispatcher from '../core/dispatcher';
import ItemsApi from '../api/ItemsApi';

let items_from_server;

const ItemsActions = {
	fetchItems: function() {
		this.dispatchLoading(true);

		console.log('fecthing items');
		ItemsApi.get()
			.then((res) => {
				console.log('got items from api!');
				this.dispatchLoading(false);
				ItemsActions.loadItems(res);
			})
			.catch((err) => {
				console.warn('err getting items from api');
				this.dispatchLoading(false);
			});

	},

	loadItems: function(itemsList) {
		dispatcher.dispatch({
			type: 'LOAD_ITEMS',
			payload: {
				itemsList
			}
		});
	},

	dispatchLoading: function(isLoading) {
		dispatcher.dispatch({
			type: 'LOADING_ITEMS',
			payload: {
				loading: isLoading
			}
		});
	}
};

export default ItemsActions;
