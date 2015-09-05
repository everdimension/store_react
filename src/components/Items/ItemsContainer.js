import React from 'react';

import ItemsStore from '../../stores/ItemsStore';
import ItemsActions from '../../actions/ItemsActions';
import ItemsList from './ItemsList';

class ItemsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = ItemsStore.getState();
	}

	componentDidMount() {
		ItemsStore.listen(this.onStoreChange.bind(this));
		ItemsActions.fetchItems();
	}

	componentWillUnmount() {
		ItemsStore.unlisten(this.onStoreChange.bind(this));
	}

	render() {
		return (
			<ItemsList items={this.state.all_items} isLoading={this.state.isLoading} />
		);
	}

	onStoreChange() {
		this.setState(ItemsStore.getState());
	}
}

export default ItemsContainer;
