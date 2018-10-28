import PropTypes from 'prop-types';
import * as React from "react";

import Heading from './heading';
import Rows from './rows';
import Delete from "./delete";

export default function PhoneNumber (props) {
	return (
		<div>
			{props.phoneNumbers.map((phone, index) => {
				return (
					<div className="content-wrapper" key={phone.id + index}>
						<Heading heading={`Phone ${index + 1}`} />
						<Rows label='Id' value={phone.id || ''} />
						<Rows label='Phone #' value={phone.phoneNumber || ''} />
						<Rows label='Country code' value={phone.countryCode || ''} />
						<Delete />
					</div>
				)
			})}
		</div>
	)
}

PhoneNumber.propTypes = {
	phoneNumbers: PropTypes.array.isRequired
};