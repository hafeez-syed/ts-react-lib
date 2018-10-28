import {CUSTOMER_LOADED, CUSTOMER_STATUS_TOGGLE} from '../actions/types';

export const CustomerReducer = (previousState = [], action) => {
	switch (action.type) {
		case CUSTOMER_LOADED:
			return previousState;
		case CUSTOMER_STATUS_TOGGLE:
			return {
				...action.customer,
				customerStatus: action.customer.customerStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
			};
		default:
			return previousState;
	}
};