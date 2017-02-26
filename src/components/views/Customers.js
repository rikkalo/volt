import React, { Component } from 'react';
import {
  Button,
  PageHeader,
  Table,
  Glyphicon
} from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import CustomerForm from './CustomerForm';
import CustomerTable from './CustomerTable';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      customerId: '',
      phone: '',
      name: '',
      address: '',
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

  open(customer) {
    let id = '';
    let name = '';
    let address = '';
    let phone = '';
    if(customer){
      id = customer.id;
      name = customer.name;
      address = customer.address;
      phone = customer.phone;
    }
    this.setState({ showModal: true, edit: !!customer, customerId:id, name: name, address: address, phone: phone});
  }

  create() {
    this.setState({showModal: false });
    this.props.createCustomer(this.state.name, this.state.address, this.state.phone);
  }

  edit() {
    this.props.editCustomer(this.state.customerId, this.state.name, this.state.address, this.state.phone);
  }

  delete() {
    this.setState({showModal: false });
    this.props.deleteCustomer(this.state.customerId);
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
    <div className="customers">
      <PageHeader>Customer list <Button onClick={() => this.open()}>Create</Button></PageHeader>
      <CustomerTable
        customers={this.props.customers}
        confirmDelete={this.confirmDelete}
        open={this.open}
      />
      {this.state.confirmDelete ?
        <ModalComponent
          showModal={this.state.showModal}
          handleClose={this.close}
          title={'Confirm delete'}
          handleClick={() => this.delete(this.state.customerId)}
          titleButton={'Delete'}
        >
          Удалить?
        </ModalComponent> :
        <ModalComponent
          showModal={this.state.showModal}
          handleClose={this.close}
          title={this.state.edit ? 'Edit customer' :'Create customer'}
          handleClick={this.state.edit ? () => this.edit(this.state.customerId) :this.create}
          titleButton={this.state.edit ? 'Edit' :'Create'}
        >
          <CustomerForm
            name={this.state.name}
            address={this.state.address}
            phone={this.state.phone}
            handleChange={this.handleChange}
          />
        </ModalComponent>
      }
    </div>
    );
  }
}

export default Customers;
