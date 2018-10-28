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

export const addressLoadedAction = (addresses) => {
	return {
		type: ADDRESS_LOADED,
		addresses
	};
};

export const addressDeletedAction = (addresses, index) => {
	return {
		type: ADDRESS_DELETED,
		index,
		addresses
	};
};

export const phoneNumberLoadedAction = (phoneNumber) => {
	return {
		type: PHONE_NUMBER_LOADED,
		phoneNumber
	};
};


export const phoneNumberDeletedAction = (phoneNumber, index) => {
	return {
		type: PHONE_NUMBER_DELETED,
		index,
		phoneNumber
	};
};

export const emailAddressLoadedAction = (emailAddress) => {
	return {
		type: EMAIL_ADDRESS_LOADED,
		emailAddress
	};
};

export const emailAddressDeletedAction = (emailAddress, index) => {
	return {
		type: EMAIL_ADDRESS_DELETED,
		index,
		emailAddress
	};
};