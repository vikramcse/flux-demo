import React from 'react';
import Item from './Item.js';

class Home extends React.Component {
	constructor() {
		super();
	}

	render() {
		var list = this.props.data.map(function(item, i) {
			return <Item key={i} obj={item}/>
		});

    return (
    	<div>
    		{list}
    	</div>
    );
  }
}

export default Home;
