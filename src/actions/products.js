import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL
  } from './constants';
import axios from 'axios';

export function fetchProducts(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    productsList: data
  };
}

export function handleCreateProduct(data) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    product: data
  };
}

export function handleEditProduct(data) {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    product: data
  };
}

export function handleDeleteProduct(data) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    productId: data
  };
}

export function editProduct(id, name, price) {
  return dispatch => {
    return axios.put(`/api/products/${id}`, { name: name, price: price })
    .then(function(response) {
      dispatch(handleEditProduct(response.data));
    })
    .catch(function (error) {
      dispatch(EDIT_PRODUCT_FAIL);
    });
  };
}

export function deleteProduct(id) {
  return dispatch => {
    return axios.delete(`/api/products/${id}`)
    .then(function(response) {
      dispatch(handleDeleteProduct(response.data.id));
    })
    .catch(function (error) {
      dispatch(EDIT_PRODUCT_FAIL);
    });
  };
}

export function getProducts() {
  return dispatch => {
    return axios.get('/api/products')
    .then(function(response) {
      dispatch(fetchProducts(response.data));
    })
    .catch(function (error) {
      dispatch(FETCH_PRODUCTS_FAIL);
    });
  };
}

export function createProduct(name, price) {
  return dispatch => {
    return axios.post('/api/products',{ name: name, price: price})
    .then(function(response) {
      dispatch(handleCreateProduct(response.data));
    })
    .catch(function (error) {
      dispatch(CREATE_PRODUCT_FAIL);
    });
  };
}
