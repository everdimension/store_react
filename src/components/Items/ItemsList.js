import React from 'react';

class ItemsList extends React.Component {

	render() {
		let loadingText = this.props.isLoading ? 'loading...' : '';
		return (
			<div className="ItemsList">
				{loadingText}
				{this.props.items.map((item) => <div>{item.name}</div>)}
			</div>
		);
	}

}

export default ItemsList;
