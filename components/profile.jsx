import * as React from 'react';
import { createStore, combineReducers } from 'redux';

import {CustomerReducer, AddressReducer, PhoneNumberReducer, EmailAddressReducer} from '../reducers/';
import {
    customerLoadedAction,
    customerStatusAction,
    addressDeletedAction,
    addressLoadedAction,
    phoneNumberLoadedAction,
    phoneNumberDeletedAction,
    emailAddressLoadedAction,
    emailAddressDeletedAction
} from '../actions/';

import Customer from './profile/customer';
import Address from './profile/address';
import PhoneNumber from './profile/phone';
import EmailAddress from './profile/email';

const profileReducers = combineReducers(
	{
		CustomerReducer,
		AddressReducer,
		PhoneNumberReducer,
		EmailAddressReducer
	}
);

const reducersMapping = {
	address: 'AddressReducer',
	customer: 'CustomerReducer',
	email: 'EmailAddressReducer',
	phone: 'PhoneNumberReducer'
};

let componentType = 'customer';

const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const profileStore = createStore(profileReducers, devToolsEnhancer);

export class Profile extends React.Component {
	__isMounted = false;
    constructor(props) {
        super(props);
	    this.state = {
		    customer: props.customer
	    };
        this.updateCustomer = this.updateCustomer.bind(this);
	    profileStore.subscribe(this.updateCustomer);

    }

	static getDerivedStateFromProps(prevProps, newProps) {
		console.log('1. getDerivedStateFromProps');
		if (prevProps !== newProps) {
			console.log(prevProps, newProps);
			/*profileStore.dispatch(addressLoadedAction());
			profileStore.dispatch(customerLoadedAction());
			profileStore.dispatch(emailAddressLoadedAction());
			profileStore.dispatch(phoneNumberLoadedAction());*/
			return newProps;
		} else {
			console.log('First attempt');
		}

		return undefined;
	}

	shouldComponentUpdate(nextState, nextProps) {
		console.log('shouldComponentUpdate...');
		return nextState !== nextProps;
	}

    componentDidMount() {
    	this.__isMounted = true;
	    console.log('3. componentDidMount');
    }

    componentDidUpdate() {
	    console.log('4. componentDidUpdate');
    }

	componentWillUnmount() {
		console.log('5. componentWillUnmount');
	}

	updateCustomer() {
    	if (this.__isMounted) {
		    console.log(':: update customer ::');
		    this.setState(() => {
			    return {
				    customer: profileStore.getState()[reducersMapping[componentType]]
			    }
		    });
	    }
	}

	onToggleCustomerStatus() {
		componentType = 'customer';
		profileStore.dispatch(customerStatusAction(this.state.customer));
	};

	onDeleteCustomerData(itemIndex, componentActionToDispatch) {
		componentType = componentActionToDispatch;
	    switch (componentType) {
            case 'address':
	            profileStore.dispatch(addressDeletedAction(this.state.customer, itemIndex));
                break;
            case 'phone':
	            profileStore.dispatch(phoneNumberDeletedAction(this.state.customer, itemIndex));
                break;
            case 'email':
	            profileStore.dispatch(emailAddressDeletedAction(this.state.customer, itemIndex));
                break;
        }
	};

	render() {
		console.log('2. render');
        let customer = this.state.customer;
        let statusHandler = this.onToggleCustomerStatus.bind(this);
        let onDeleteHandler = this.onDeleteCustomerData.bind(this);

        return (
            <div className="row profile">
                <div className="col-md-3 profile-column">
                    <Customer customer={customer} onStatusClick={statusHandler} />
                </div>
                <div className="col-md-9 profile-column">
                    <div className="profile-content">
	                    <div className="row border-between">
		                    <div className="col-md-4">
			                    <h4>Address</h4>
			                    <Address addresses={customer.addresses} deleteHandler={onDeleteHandler} />
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Phone number</h4>
			                    <PhoneNumber phoneNumbers={customer.phoneNumbers} deleteHandler={onDeleteHandler} />
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Email address</h4>
			                    <EmailAddress emailAddresses={customer.emailAddresses} deleteHandler={onDeleteHandler} />
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
