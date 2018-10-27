import * as React from 'react';

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
                        <img src={require(`./img/${customer.gender === 'FEM' ? 'female' : 'male'}.jpg`)} alt="John" />
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
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Address 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Street:
					                    </div>
					                    <div className="col-md-6">
						                    800 Bourke Street
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    City:
					                    </div>
					                    <div className="col-md-6">
						                    Docklands
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Postcode:
					                    </div>
					                    <div className="col-md-6">
						                    3008
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    State:
					                    </div>
					                    <div className="col-md-6">
						                    Victoria
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Address 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Street:
					                    </div>
					                    <div className="col-md-6">
						                    800 Bourke Street
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    City:
					                    </div>
					                    <div className="col-md-6">
						                    Docklands
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Postcode:
					                    </div>
					                    <div className="col-md-6">
						                    3008
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    State:
					                    </div>
					                    <div className="col-md-6">
						                    Victoria
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Address 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Street:
					                    </div>
					                    <div className="col-md-6">
						                    800 Bourke Street
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    City:
					                    </div>
					                    <div className="col-md-6">
						                    Docklands
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Postcode:
					                    </div>
					                    <div className="col-md-6">
						                    3008
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    State:
					                    </div>
					                    <div className="col-md-6">
						                    Victoria
					                    </div>
				                    </div>
			                    </div>
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Phone number</h4>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
		                    </div>
		                    <div className="col-md-4">
			                    <h4>Email address</h4>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
			                    <div className="address-wrapper">
				                    <div className="row">
					                    <div className="col-md-12">
						                    <strong>Phone 1</strong>
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Id:
					                    </div>
					                    <div className="col-md-6">
						                    038678
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Phone number:
					                    </div>
					                    <div className="col-md-6">
						                    03 8678 5555
					                    </div>
				                    </div>
				                    <div className="row">
					                    <div className="col-md-6">
						                    Country code:
					                    </div>
					                    <div className="col-md-6">
						                    AU
					                    </div>
				                    </div>
			                    </div>
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        )
    }
}