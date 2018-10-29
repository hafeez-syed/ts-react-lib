import * as React from 'react';

import Address from './profile/address';
import PhoneNumber from './profile/phone';
import EmailAddress from './profile/email';

export class Profile extends React.Component {
    constructor(props) {
        super(props);

	    this.state = {
		    customer: props.customer
	    };
    }

	componentWillMount() {
		console.log('1. componentWillMount');
	}

    componentDidMount() {
	    console.log('2. componentDidMount');
    }

	componentDidUpdate() {
		debugger;
	}

    componentWillUpdate() {
	    debugger;
    }


	updateCustomer(customer) {
		this.setState(() => {
			return {
				customer: customer
			}
		});
	}
    render() {
        let customer = this.state.customer;
        return (
            <div className="row profile">
                <div className="col-md-3 profile-column">
                    <div className="card">
                        <img src={require(`../nabone-react-customer/components/app.reactCustomer/host/assets/img/${customer.gender === 'FEM' ? 'female' : 'male'}.jpg`)} alt="John" />
                        <h1>{customer.firstName} {customer.lastName}</h1>
                        <p className="title">{customer.customerNumber}</p>
                        <p>{customer.displayAddress}</p>
                        <p>
                            <button>Contact</button>
                        </p>
                    </div>
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