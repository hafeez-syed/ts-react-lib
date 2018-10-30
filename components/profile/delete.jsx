import * as React from "react";

export default function Delete (props) {
	const {onClickHandler, order, componentType} = props;
	return (
		<div className="row">
			<div className="pull-right">
                <button onClick={() => onClickHandler(order, componentType)}>Delete</button>
			</div>
		</div>
	)
}