import PropTypes from 'prop-types';
import * as React from "react";

import { createStore } from 'redux';
import {AddressReducer} from '../../reducers/address';
import {addressLoadedAction, addressDeletedAction, customerLoadedAction} from '../../actions/';

import Heading from './heading';
import Rows from './rows';
import Delete from './delete';

let addressStore;
let dispatchStoreEvent = (address, addressIndex) => {
	addressStore.dispatch(addressDeletedAction(address, addressIndex))
};

export default function Address (props) {
	addressStore = createStore(AddressReducer);

	addressStore.subscribe(() => {
		console.log(addressStore.getState());
		console.log(props);
		props.addresses = addressStore.getState();
	});

	addressStore.dispatch(addressLoadedAction(props.addresses));

	return (
    	<div>
		    {props.addresses.map((address, index) => {
		    	return (
				    <div className="content-wrapper" key={address.id}>
					    <Heading heading={`Address ${index + 1}`} />
					    <Rows label='Street' value={`${address.streetNumber || ''} ${address.streetName}`} />
					    <Rows label='City' value={address.city || ''} />
					    <Rows label='Postcode' value={address.postCode || ''} />
					    <Rows label='State' value={address.state || ''} />
					    <Delete onClickHandler={dispatchStoreEvent} data={props.addresses} order={index} />
				    </div>
			    )
		    })}
	    </div>
    )
}

Address.propTypes = {
	addresses: PropTypes.array.isRequired
};
