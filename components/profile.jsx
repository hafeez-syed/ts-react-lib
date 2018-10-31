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

let customerStore;
let addressStore;
let phoneStore;
let emailStore;

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
    constructor(props) {
        super(props);

	    this.state = {
		    customer: props.customer
	    };
        this.updateCustomer = this.updateCustomer.bind(this);
        //this.updateAddress = this.updateAddress.bind(this);
        //this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
        //this.updateEmailAddress = this.updateEmailAddress.bind(this);

        /*customerStore = createStore(CustomerReducer);
	    customerStore.subscribe(this.updateCustomer);
	    customerStore.dispatch(customerLoadedAction());

        addressStore = createStore(AddressReducer);
        addressStore.subscribe(this.updateAddress);
        addressStore.dispatch(addressLoadedAction());

        phoneStore = createStore(PhoneNumberReducer);
        phoneStore.subscribe(this.updatePhoneNumber);
        phoneStore.dispatch(phoneNumberLoadedAction());

        emailStore = createStore(EmailAddressReducer);
        emailStore.subscribe(this.updateEmailAddress);
        emailStore.dispatch(emailAddressLoadedAction());*/

	    //profileStore = createStore(CustomerReducer);
	    profileStore.subscribe(this.updateCustomer);
	    profileStore.dispatch(customerLoadedAction());

        //addressStore = createStore(AddressReducer);
	    //profileStore.subscribe(this.updateAddress);
	    profileStore.subscribe(this.updateCustomer);
	    profileStore.dispatch(addressLoadedAction());

        //phoneStore = createStore(PhoneNumberReducer);
	    //profileStore.subscribe(this.updatePhoneNumber);
	    profileStore.subscribe(this.updateCustomer);
	    profileStore.dispatch(phoneNumberLoadedAction());

        //emailStore = createStore(EmailAddressReducer);
	    //profileStore.subscribe(this.updateEmailAddress);
	    profileStore.subscribe(this.updateCustomer);
	    profileStore.dispatch(emailAddressLoadedAction());
    }

	componentWillMount() {
		console.log('1. componentWillMount');
	}

    componentDidMount() {
	    console.log('2. componentDidMount');
    }

	updateCustomer() {
		this.setState(() => {
			return {
				customer: profileStore.getState()[reducersMapping[componentType]]
			}
		});
	}

	/*updateAddress(customer) {
		this.setState(() => {
			return {
				//customer: customer || addressStore.getState()
				customer: customer || profileStore.getState()
			}
		});
	}

	updatePhoneNumber(customer) {
		this.setState(() => {
			return {
				//customer: customer || phoneStore.getState()
				customer: customer || profileStore.getState()
			}
		});
	}

    updateEmailAddress(customer) {
		this.setState(() => {
			return {
				//customer: customer || phoneStore.getState()
				customer: customer || profileStore.getState()
			}
		});
	}*/

	onToggleCustomerStatus() {
		componentType = 'customer';
		//customerStore.dispatch(customerStatusAction(this.state.customer));
		profileStore.dispatch(customerStatusAction(this.state.customer));
	};

	onDeleteCustomerData(itemIndex, componentActionToDispatch) {
		componentType = componentActionToDispatch;
	    switch (componentType) {
            case 'address':
                //addressStore.dispatch(addressDeletedAction(this.state.customer, itemIndex));
	            profileStore.dispatch(addressDeletedAction(this.state.customer, itemIndex));
                break;
            case 'phone':
                //phoneStore.dispatch(phoneNumberDeletedAction(this.state.customer, itemIndex));
	            profileStore.dispatch(phoneNumberDeletedAction(this.state.customer, itemIndex));
                break;
            case 'email':
                //emailStore.dispatch(emailAddressDeletedAction(this.state.customer, itemIndex));
	            profileStore.dispatch(emailAddressDeletedAction(this.state.customer, itemIndex));
                break;
        }
	};

	render() {
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
