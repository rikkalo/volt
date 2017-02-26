import * as types from "../actions/constants";

const initialState = {
	customersList: []
};

const customersReducer = function(state = initialState, action) {
	switch(action.type) {

	case types.FETCH_CUSTOMERS_SUCCESS:
		return Object.assign({}, state, { customersList: action.customers });

	case types.CREATE_CUSTOMER_SUCCESS:
		return Object.assign({}, state, { customersList: state.customersList.concat(action.customer) });

	case types.EDIT_CUSTOMER_SUCCESS:
		return Object.assign({}, state, { customersList: findEditCustomer(state.customersList, action.customer) });

	case types.DELETE_CUSTOMER_SUCCESS:
		return Object.assign({}, state,
			{ customersList: state.customersList.filter(
					(customer) => {
						return customer["id"] !== action.customerId;
					})
			});

	}

	return state;

};

const findEditCustomer = function(customers, customerEdit) {
	let index = customers.findIndex(
		(customer, i) => {
			if (customer.id === customerEdit.id) {
				return i;
			}
		});

	customers[index] = customerEdit;
	return customers;
};

export default customersReducer;
