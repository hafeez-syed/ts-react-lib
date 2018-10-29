import {
	CUSTOMER_LOADED,
	CUSTOMER_STATUS_TOGGLE,
	ADDRESS_LOADED,
	ADDRESS_DELETED,
	PHONE_NUMBER_LOADED,
	PHONE_NUMBER_DELETED,
	EMAIL_ADDRESS_LOADED,
	EMAIL_ADDRESS_DELETED
} from './types';

export const customerLoadedAction = () => {
	return {
		type: CUSTOMER_LOADED
	};
};

export const customerStatusAction = (customer) => {
	return {
		type: CUSTOMER_STATUS_TOGGLE,
		customer
	};
};

export const addressLoadedAction = () => {
	return {
		type: ADDRESS_LOADED
	};
};

export const addressDeletedAction = (customer, index) => {
	return {
		type: ADDRESS_DELETED,
		index,
        customer
	};
};

export const phoneNumberLoadedAction = () => {
	return {
		type: PHONE_NUMBER_LOADED
	};
};


export const phoneNumberDeletedAction = (customer, index) => {
	return {
		type: PHONE_NUMBER_DELETED,
		index,
        customer
	};
};

export const emailAddressLoadedAction = () => {
	return {
		type: EMAIL_ADDRESS_LOADED
	};
};

export const emailAddressDeletedAction = (customer, index) => {
	return {
		type: EMAIL_ADDRESS_DELETED,
		index,
        customer
	};
};