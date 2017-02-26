import * as types from '../actions/constants';

const initialState = {
  productsList: []
};

const productsReducer = function(state = initialState, action) {
  switch(action.type) {

  case types.FETCH_PRODUCTS_SUCCESS:
    return Object.assign({}, state, { productsList: action.productsList});

  case types.CREATE_PRODUCT_SUCCESS:
    return Object.assign({}, state, { productsList: state.productsList.concat(action.product) });

  case types.EDIT_PRODUCT_SUCCESS:
    return Object.assign({}, state, { productsList: findEditProduct(state.productsList, action.product) });

  case types.DELETE_PRODUCT_SUCCESS:
    return Object.assign({}, state,
      { productsList: state.productsList.filter(
				(product) => {
          return product['id'] !== action.productId;
        })
      });
  }

  return state;

};

const findEditProduct = function(products, productEdit) {
  let index = products.findIndex(
		(product, i) => {
      if (product.id === productEdit.id) {
        return i;
      }
  });
  products[index] = productEdit;
  return products;
};

export default productsReducer;
