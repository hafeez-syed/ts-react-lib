import * as React from "react";

export default function Delete (props) {
	const {onClickHandler, order, data} = props;
	return (
		<div className="row">
			<div className="pull-right">
				{onClickHandler && order && data
					? <button onClick={() => onClickHandler(data, order)}>Delete</button>
					: <button>Delete</button>
				}
			</div>
		</div>
	)
}