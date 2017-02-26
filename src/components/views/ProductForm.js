import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Col,
	FormControl,
	ControlLabel
} from "react-bootstrap";

class ProductForm extends Component {
	render() {
		return (
    <Form horizontal>
      <FormGroup controlId="product_name">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="product_name" value={this.props.name} onChange={(e) => this.props.handleChange("name", e)} placeholder="Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="product_price">
        <Col componentClass={ControlLabel} sm={2}>
          Price
        </Col>
        <Col sm={10}>
          <FormControl type="product_price"  value={this.props.price} onChange={(e) => this.props.handleChange("price", e)} placeholder="Price" />
        </Col>
      </FormGroup>
    </Form>
		);
	}
}

export default ProductForm;
