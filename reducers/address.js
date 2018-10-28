import {ADDRESS_LOADED, ADDRESS_DELETED} from '../actions/types';

export const AddressReducer = (previousState = [], action) => {
	switch (action.type) {
		case ADDRESS_LOADED:
			return action.addresses || previousState;
		case ADDRESS_DELETED:
			return [
				...previousState.slice(0, action.index),
				...previousState.slice(action.index + 1)
			];
		default:
			return previousState;
	}
};