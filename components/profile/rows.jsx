import PropTypes from 'prop-types';
import * as React from "react";

export default function Rows(props) {
	const {label, value} = props;
	return (
		<div>
			<div className="row">
				<div className="col-md-6">
					{label} {label ? ':' : ' '}
				</div>
				<div className="col-md-6">
					{value}
				</div>
			</div>
		</div>
	)
}

Rows.propType = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};