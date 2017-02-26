import React, { Component } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

class ProductTable extends Component {
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
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => {
            return (
              <tr key={product.id} onClick={() => this.props.open(product)}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><Glyphicon glyph='glyphicon glyphicon-trash' onClick={(e) => this.props.confirmDelete()} /></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
