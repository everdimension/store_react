import dispatcher from '../core/dispatcher';
import { EventEmitter } from 'events';

let _items = [];
let _isLoading = false;

function loadItems(itemsList) {
	_items = itemsList;
}

function getAll() {
	return _items;
}

function toggleLoading(isLoading) {
	_isLoading = isLoading;
}

const ItemsStore = Object.assign(EventEmitter.prototype, {
	getState: function () {
		return {
			all_items: getAll(),
			isLoading: _isLoading
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
	if (action.type === 'LOAD_ITEMS') {
		loadItems(action.payload.itemsList);

	} else if (action.type === 'LOADING_ITEMS') {
		toggleLoading(action.payload.loading);

	} else {
		// do nothing
		return;
	}

	ItemsStore.emitChange();

});

export default ItemsStore;
