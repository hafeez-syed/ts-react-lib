import * as React from 'react';
import { createStore } from 'redux';
import {CustomerReducer} from '../reducers/';
import {customerLoadedAction, customerStatusAction} from '../actions/';

import Customer from './profile/customer';
import Address from './profile/address';
import PhoneNumber from './profile/phone';
import EmailAddress from './profile/email';

let customerStore;

export class Profile extends React.Component {
    constructor(props) {
        super(props);

	    this.state = {
		    customer: props.customer
	    };
	    customerStore = createStore(CustomerReducer);

	    this.updateCustomer = this.updateCustomer.bind(this);

	    customerStore.subscribe(this.updateCustomer);
	    customerStore.dispatch(customerLoadedAction());
    }

	componentWillMount() {
		console.log('1. componentWillMount');
	}

    componentDidMount() {
	    console.log('2. componentDidMount');
    }

	componentDidUpdate(data) {
		//debugger;
	}

    componentWillUpdate(data) {
	    //debugger;
    }


	updateCustomer(customer) {
		this.setState(() => {
			return {
				customer: customer || customerStore.getState()
			}
		});
	}

	onToggleCustomerStatus() {
		customerStore.dispatch(customerStatusAction(this.state.customer));
	};


	render() {
        let customer = this.state.customer;
        let statusHandler = this.onToggleCustomerStatus.bind(this);

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
			                    <Address addresses={customer.addresses} />
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Phone number</h4>
			                    <PhoneNumber phoneNumbers={customer.phoneNumbers} />
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Email address</h4>
			                    <EmailAddress emailAddresses={customer.emailAddresses} />
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        )
    }
}