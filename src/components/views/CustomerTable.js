import React, { Component } from "react";
import { Table, Glyphicon } from "react-bootstrap";

class CustomerTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			edit: false,
			confirmDelete: false
		};
	}

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{this.props.customers.map(customer => {
						return (
							<tr key={customer.id} onClick={() => this.props.open(customer)}>
								<td>{customer.id}</td>
								<td>{customer.name}</td>
								<td>{customer.address}</td>
								<td>{customer.phone}</td>
								<td><Glyphicon glyph='glyphicon glyphicon-trash' onClick={(e) => this.props.confirmDelete()}/></td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		);
	}
}

export default CustomerTable;
