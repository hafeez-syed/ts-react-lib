import * as React from "react";

export default function Customer (props) {
	const {customer, onStatusClick} = props;
	return (
		<div className="card">
			<img src={require(`../../assets/img/${customer.gender === 'FEM' ? 'female' : 'male'}.jpg`)} alt="John" />
			<h1>{customer.firstName} {customer.lastName}</h1>
			<p className="title">{customer.customerNumber}</p>
			<p>{customer.displayAddress}</p>
			<p>
				<button onClick={onStatusClick}>{customer.customerStatus.toUpperCase()}</button>
			</p>
		</div>
	)
}
