import dispatcher from '../core/dispatcher';

let items_from_server;

const ItemsActions = {
	fetchItems: function() {
		this.dispatchLoading(true);

		setTimeout(function(self) {
			self.dispatchLoading(false);
			ItemsActions.loadItems(items_from_server);

		}, 1000, this);

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
}

export default ItemsActions;

items_from_server = [
  {
    "_id": 1,
    "name": "item_name_2",
    "color": "Black",
    "issueDate": "2015-06-19T12:20:09.000Z",
    "price": 18,
    "rating": 3,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 2,
    "name": "item_name_3",
    "color": "Yellow",
    "issueDate": "2015-07-03T12:20:16.000Z",
    "price": 400,
    "rating": 5,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 3,
    "name": "item_name_4",
    "color": "Blue",
    "issueDate": "2015-06-12T12:20:23.000Z",
    "price": 300,
    "rating": 2,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 4,
    "name": "item_name_5",
    "color": "White",
    "issueDate": "2015-06-26T12:20:24.000Z",
    "price": 1200,
    "rating": 5,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 5,
    "name": "item_name_6",
    "color": "Yellow",
    "issueDate": "2015-05-29T12:20:24.000Z",
    "price": 400,
    "rating": 5,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 6,
    "name": "item_name_7",
    "color": "Green",
    "issueDate": "2015-06-26T12:20:25.000Z",
    "price": 18,
    "rating": 1,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 7,
    "name": "item_name_8",
    "color": "Yellow",
    "issueDate": "2015-06-26T12:20:25.000Z",
    "price": 300,
    "rating": 1,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 8,
    "name": "item_name_9",
    "color": "Yellow",
    "issueDate": "2015-06-05T12:20:26.000Z",
    "price": 300,
    "rating": 3,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 9,
    "name": "item_name_10",
    "color": "Black",
    "issueDate": "2015-06-26T12:20:26.000Z",
    "price": 300,
    "rating": 3,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 10,
    "name": "item_name_11",
    "color": "Green",
    "issueDate": "2015-05-29T12:20:27.000Z",
    "price": 300,
    "rating": 1,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 11,
    "name": "item_name_12",
    "color": "Blue",
    "issueDate": "2015-06-12T12:20:27.000Z",
    "price": 20,
    "rating": 2,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 12,
    "name": "item_name_13",
    "color": "Red",
    "issueDate": "2015-06-26T12:20:27.000Z",
    "price": 14,
    "rating": 2,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 13,
    "name": "item_name_14",
    "color": "Blue",
    "issueDate": "2015-06-05T12:20:28.000Z",
    "price": 300,
    "rating": 3,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 14,
    "name": "item_name_15",
    "color": "Red",
    "issueDate": "2015-06-26T12:20:28.000Z",
    "price": 400,
    "rating": 5,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 15,
    "name": "item_name_16",
    "color": "Blue",
    "issueDate": "2015-05-29T12:20:29.000Z",
    "price": 18,
    "rating": 2,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 16,
    "name": "item_name_17",
    "color": "Blue",
    "issueDate": "2015-06-26T12:20:29.000Z",
    "price": 20,
    "rating": 1,
    "inStock": true,
    "img": "http://placehold.it/150x100",
    "__v": 0
  },
  {
    "_id": 17,
    "name": "item_name_18",
    "color": "Green",
    "issueDate": "2015-06-05T12:20:30.000Z",
    "price": 1200,
    "rating": 4,
    "inStock": false,
    "img": "http://placehold.it/150x100",
    "__v": 0
  }
];
