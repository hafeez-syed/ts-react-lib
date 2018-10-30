import * as React from 'react';
import { createStore } from 'redux';

import {CustomerReducer, AddressReducer, PhoneNumberReducer} from '../reducers/';
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
import {EmailAddressReducer} from "../reducers";

let customerStore;
let addressStore;
let phoneStore;
let emailStore;

export class Profile extends React.Component {
    constructor(props) {
        super(props);

	    this.state = {
		    customer: props.customer
	    };
        this.updateCustomer = this.updateCustomer.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
        this.updateEmailAddress = this.updateEmailAddress.bind(this);

        customerStore = createStore(CustomerReducer);
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
        emailStore.dispatch(emailAddressLoadedAction());
    }

	componentWillMount() {
		console.log('1. componentWillMount');
	}

    componentDidMount() {
	    console.log('2. componentDidMount');
    }

	updateCustomer(customer) {
		this.setState(() => {
			return {
				customer: customer || customerStore.getState()
			}
		});
	}

	updateAddress(customer) {
		this.setState(() => {
			return {
				customer: customer || addressStore.getState()
			}
		});
	}

	updatePhoneNumber(customer) {
		this.setState(() => {
			return {
				customer: customer || phoneStore.getState()
			}
		});
	}

    updateEmailAddress(customer) {
		this.setState(() => {
			return {
				customer: customer || phoneStore.getState()
			}
		});
	}

	onToggleCustomerStatus() {
		customerStore.dispatch(customerStatusAction(this.state.customer));
	};

	onDeleteCustomerData(itemIndex, componentType) {
	    switch (componentType) {
            case 'address':
                addressStore.dispatch(addressDeletedAction(this.state.customer, itemIndex));
                break;
            case 'phone':
                phoneStore.dispatch(phoneNumberDeletedAction(this.state.customer, itemIndex));
                break;
            case 'email':
                emailStore.dispatch(emailAddressDeletedAction(this.state.customer, itemIndex));
                break;
            default:
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
