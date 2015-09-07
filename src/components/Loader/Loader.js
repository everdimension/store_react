import React from 'react';
import classNames from 'classnames';
import './Loader.less';

class Loader extends React.Component {
	render() {
		let componentClass = classNames(
			'Loader',
			(this.props.size ? 'Loader--' + this.props.size : null)
		);

		return (
			<div className={componentClass}></div>
		);
	}
}

export default Loader;
