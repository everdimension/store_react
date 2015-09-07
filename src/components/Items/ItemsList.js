import React from 'react';
import Item from './Item.js';
import Loader from '../Loader';

class ItemsList extends React.Component {

	render() {
		let loadingText = this.props.isLoading ?
			(
				<div className="text-center">
					<Loader size="lg" />
				</div>
			) :
			'';

		let items = this.props.items.map((item) => {
			return <Item key={item._id} item={item} />;
		});
		return (
			<div className="ItemsList">
				{loadingText}
				{items}
			</div>
		);
	}

}

export default ItemsList;
