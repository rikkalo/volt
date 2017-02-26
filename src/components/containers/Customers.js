import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { createCustomer, deleteCustomer, editCustomer, getCustomers} from "../../actions/customers";
import Customers from "../../components/views/Customers";
import store from "../../store";

const mapStateToProps = (store) => ({
	customers : store.customers.customersList
});

const mapDispatchToProps = {
	createCustomer,
	deleteCustomer,
	editCustomer,
	getCustomers
};

class CustomersContainer extends Component {
	componentDidMount() {
		document.title = "Customers list";
		this.props.getCustomers();
	}

	componentWillReceiveProps(nextProps) {
		document.title = "Customers list";
	}

	render() {
		return (
      <Customers
				customers={this.props.customers}
				createCustomer={this.props.createCustomer}
				deleteCustomer={this.props.deleteCustomer}
				editCustomer={this.props.editCustomer}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);
