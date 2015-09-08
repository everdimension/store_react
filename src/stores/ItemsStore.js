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

class ItemsStore extends EventEmitter {
	getState () {
		return {
			all_items: getAll(),
			isLoading: _isLoading
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

let itemsStore = new ItemsStore();

dispatcher.register(function (action) {
	if (action.type === 'LOAD_ITEMS') {
		loadItems(action.payload.itemsList);

	} else if (action.type === 'LOADING_ITEMS') {
		toggleLoading(action.payload.loading);

	} else {
		// do nothing
		return;
	}

	itemsStore.emitChange();

});

export default itemsStore;
