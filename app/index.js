import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import store from './stores/Store.js';
import * as action from './actions/Actions.js';

class App extends React.Component {
	constructor() {
		super();
		this.addEntry = this.addEntry.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			address: store.getAll()
		}
	}

	componentWillMount() {
		store.on('change', this.onChange);
	}

	componentWillUnmount() {
		store.removeListener('change');
	}

	onChange() {
		this.setState({
			address: store.getAll()
		})
	}

	addEntry() {
		action.createEntry({
			country: 'Dummy 1',
			state: 'Dummy 2',
			city: 'Dummy 3'
		});
	}

	render() {
    return (
    	<div>
    		<h1>Hello world</h1>
    		<button onClick={this.addEntry}>Create</button>
    		<Home data={this.state.address}/>
    	</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
