import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createProduct, deleteProduct, editProduct, getProducts } from '../../actions/products';
import Products from '../../components/views/Products';
import store from '../../store';

const mapStateToProps = (store) => ({
  products : store.products.productsList
});

const mapDispatchToProps = {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts
};

class ProductsContainer extends Component {
  componentDidMount() {
    document.title = 'Products list';
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    document.title = 'Products list';
  }

  render() {
    return (
      <Products
				products={this.props.products}
				createProduct={this.props.createProduct}
				deleteProduct={this.props.deleteProduct}
				editProduct={this.props.editProduct}
			/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
