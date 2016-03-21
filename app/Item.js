import React from 'react';

class Item extends React.Component {
	constructor() {
		super();
	}

	render() {
    return (
    	<div>
    		{this.props.obj.country} - {this.props.obj.state} - {this.props.obj.city}
    	</div>
    );
  }
}

export default Item;
