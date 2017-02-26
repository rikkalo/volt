import React, { Component } from 'react';
import {
  Button,
  PageHeader,
  Table,
  Glyphicon
} from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      productId: '',
      name: '',
      price: 0,
      edit: false,
      confirmDelete: false
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.create = this.create.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  close() {
    this.setState({ showModal: false, edit: false, confirmDelete: false });
  }

  open(product) {
    let id = '';
    let name = '';
    let price = 0;
    if(product){
      id = product.id;
      name = product.name;
      price = product.price;
    }
    this.setState({ showModal: true, edit: !!product, productId:id, name: name, price: price});
  }

  create() {
    this.setState({showModal: false });
    this.props.createProduct(this.state.name, this.state.price);
  }

  edit() {
    this.props.editProduct(this.state.productId, this.state.name, this.state.price);
  }

  delete() {
    this.setState({showModal: false });
    this.props.deleteProduct(this.state.productId);
  }

  confirmDelete() {
    this.setState({ confirmDelete: true, edit: false });
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
    <div className="products">
      <PageHeader>Product list <Button onClick={() => this.open()}>Create</Button></PageHeader>
      <ProductTable
        products={this.props.products}
        confirmDelete={this.confirmDelete}
        open={this.open}
      />
      {this.state.confirmDelete ?
        <ModalComponent
          showModal={this.state.showModal}
          handleClose={this.close}
          title={'Confirm delete'}
          handleClick={() => this.delete(this.state.productId)}
          titleButton={'Delete'}
        >
          Удалить?
        </ModalComponent> :
        <ModalComponent
          showModal={this.state.showModal}
          handleClose={this.close}
          title={this.state.edit ? 'Edit product' :'Create product'}
          handleClick={this.state.edit ? () => this.edit(this.state.productId) :this.create}
          titleButton={this.state.edit ? 'Edit' :'Create'}
        >
          <ProductForm
            name={this.state.name}
            price={this.state.price}
            handleChange={this.handleChange}
          />
        </ModalComponent>
      }
    </div>
    );
  }
}

export default Products;
