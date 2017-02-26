import {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAIL,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAIL,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_FAIL,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAIL
  } from './constants';
import axios from 'axios';

export function fetchCustomers(data) {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    customers: data
  };
}

export function handleCreateCustomer(data) {
  return {
    type: CREATE_CUSTOMER_SUCCESS,
    customer: data
  };
}

export function handleEditCustomer(data) {
  return {
    type: EDIT_CUSTOMER_SUCCESS,
    customer: data
  };
}

export function handleDeleteCustomer(data) {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    customerId: data
  };
}

export function editCustomer(id, name, address, phone) {
  return dispatch => {
    return axios.put(`/api/customers/${id}`, { name: name, address: address, phone: phone})
    .then(function(response) {
      dispatch(handleEditCustomer(response.data));
    })
    .catch(function (error) {
      dispatch(EDIT_CUSTOMER_FAIL);
    });
  };
}

export function deleteCustomer(id) {
  return dispatch => {
    return axios.delete(`/api/customers/${id}`)
    .then(function(response) {
      dispatch(handleDeleteCustomer(response.data.id));
    })
    .catch(function (error) {
      dispatch(DELETE_CUSTOMER_FAIL);
    });
  };
}

export function getCustomers() {
  return dispatch => {
    return axios.get('/api/customers')
    .then(function(response) {
      dispatch(fetchCustomers(response.data));
    })
    .catch(function (error) {
      dispatch(FETCH_CUSTOMERS_FAIL);
    });
  };
}

export function createCustomer(name, address, phone) {
  return dispatch => {
    return axios.post('/api/customers',{ name: name, address: address, phone: phone})
    .then(function(response) {
      dispatch(handleCreateCustomer(response.data));
    })
    .catch(function (error) {
      dispatch(CREATE_CUSTOMER_FAIL);
    });
  };
}
