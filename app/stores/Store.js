import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/Dispatcher';

class Store extends EventEmitter {
	constructor() {
		super();

		this.address = [{
				country: 'India',
				state: 'Maharashtra',
				city: 'Mumbai'
			}, {
				country: 'US',
				state: 'Boston',
				city: 'NYC'
			}, {
				country: 'India',
				state: 'Karnataka',
				city: 'abcd'
		}];
	}

	createEntry(payload) {
		this.address.push({
			country: payload.country,
			state: payload.state,
			city: payload.city
		});

		this.emit('change');
	}

	getAll() {
		return this.address;
	}

	handleActions(action) {
		switch(action.actionType) {
			case 'ADD':
				this.createEntry(action.payload);
				break;
		}
	}
}

const store = new Store;
dispatcher.register(store.handleActions.bind(store));
window.dispatcher = dispatcher;
export default store;