import PropTypes from 'prop-types';
import * as React from "react";

import Heading from './heading';
import Rows from './rows';
import Delete from './delete';

export default function Address (props) {
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
					    <Delete />
				    </div>
			    )
		    })}
	    </div>
    )
}

Address.propTypes = {
	addresses: PropTypes.array.isRequired
};