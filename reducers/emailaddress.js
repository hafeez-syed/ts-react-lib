import {EMAIL_ADDRESS_LOADED, EMAIL_ADDRESS_DELETED} from '../actions/types';

export const EmailAddressReducer = (previousState = [], action) => {
	switch (action.type) {
		case EMAIL_ADDRESS_LOADED:
			return action.customer || previousState;
        case EMAIL_ADDRESS_DELETED:
            return {
                ...action.customer,
                emailAddresses: [
                    ...action.customer.emailAddresses.slice(0, action.index),
                    ...action.customer.emailAddresses.slice(action.index + 1)
                ]
            };
		default:
			return previousState;
	}
};