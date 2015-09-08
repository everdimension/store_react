import React, { PropTypes } from 'react';

class Item extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="media">
						<div className="media-left">
							<img src={item.img} width="150" alt="item image" className="media-object" />
							</div>

							<div className="media-body">

								<div className="row">

									<div className="col-sm-4">
										<p>{item.name}</p>
										<p>{item.color}</p>
									</div>
									<div className="col-sm-4">
										<p> Issue date: {item.issueDate}</p>
										<p>
											<span className="glyphicon glyphicon-ok text-success"></span>
											In stock
										</p>
									</div>
									<div className="col-sm-4">
										<p>{item.price}</p>
										<p>
											<button className="btn btn-success" ng-disabled="!item.inStock" ng-click="CartSvc.addItem(item)" id={'cart_item-' + item._id}>
												Order
											</button>
										</p>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>
		);
	}
}

Item.propTypes = {
	item: PropTypes.object.isRequired
};

export default Item;
