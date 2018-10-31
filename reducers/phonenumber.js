import {PHONE_NUMBER_LOADED, PHONE_NUMBER_DELETED} from '../actions/types';

export const PhoneNumberReducer = (previousState = {}, action) => {
	switch (action.type) {
		case PHONE_NUMBER_LOADED:
			return { ...action.customer };
        case PHONE_NUMBER_DELETED:
            return {
                ...action.customer,
                phoneNumbers: [
                    ...action.customer.phoneNumbers.slice(0, action.index),
                    ...action.customer.phoneNumbers.slice(action.index + 1)
                ]
            };
		default:
			return previousState;
	}
};