import PropTypes from 'prop-types';
import * as React from "react";

import Heading from './heading';
import Rows from './rows';
import Delete from "./delete";

export default function EmailAddress ({emailAddresses, deleteHandler}) {
	return (
		<div>
			{emailAddresses.map((email, index) => {
				return (
					<div className="content-wrapper" key={email.id + index}>
						<Heading heading={`Email address ${index + 1}`} />
						<Rows label='Id' value={email.id || ''} />
						<Rows label='Email address' value={email.address || ''} />
						<Rows label='' value={''} />
					</div>
				)
			})}
		</div>
	)
}

EmailAddress.propTypes = {
	emailAddresses: PropTypes.array.isRequired
};