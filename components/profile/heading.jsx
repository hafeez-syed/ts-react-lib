import PropTypes from 'prop-types';
import * as React from "react";

export default function Heading(props) {
	return (
		<div className="row">
			<div className="col-md-12">
				<strong>{props.heading}</strong>
			</div>
		</div>
	)
}

Heading.propType = {
	heading: PropTypes.string.isRequired
};