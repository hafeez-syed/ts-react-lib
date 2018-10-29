import {ADDRESS_LOADED, ADDRESS_DELETED} from '../actions/types';

export const AddressReducer = (previousState = [], action) => {
	switch (action.type) {
		case ADDRESS_LOADED:
			return action.customer || previousState;
        case ADDRESS_DELETED:
            return {
                ...action.customer,
                addresses: [
                    ...action.customer.addresses.slice(0, action.index),
                    ...action.customer.addresses.slice(action.index + 1)
                ]
            };
		default:
			return previousState;
	}
};