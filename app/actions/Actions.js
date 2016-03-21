import dispatcher from '../dispatchers/Dispatcher';

export function createEntry(data) {
	dispatcher.dispatch({
		actionType: 'ADD',
		payload: data
	});
}