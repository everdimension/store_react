import React from 'react';

import ItemsActions from '../../actions/ItemsActions';
import ItemsStore   from '../../stores/ItemsStore';
import ItemsList    from './ItemsList';

class ItemsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = ItemsStore.getState();
		this.onStoreChange = this.onStoreChange.bind(this);
	}

	componentDidMount() {
		ItemsStore.listen(this.onStoreChange);
		ItemsActions.fetchItems();
	}

	componentWillUnmount() {
		ItemsStore.unlisten(this.onStoreChange);
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
