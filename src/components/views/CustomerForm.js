import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Col,
	FormControl,
	ControlLabel
} from "react-bootstrap";

class CustomerForm extends Component {
	render() {
		return (
    <Form horizontal>
      <FormGroup controlId="customer_name">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="customer_name" value={this.props.name} onChange={(e) => this.props.handleChange("name", e)} placeholder="Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="customer_address">
        <Col componentClass={ControlLabel} sm={2}>
          Address
        </Col>
        <Col sm={10}>
          <FormControl type="customer_address"  value={this.props.address} onChange={(e) => this.props.handleChange("address", e)} placeholder="Address" />
        </Col>
      </FormGroup>

      <FormGroup controlId="customer_phone">
        <Col componentClass={ControlLabel} sm={2}>
          Phone
        </Col>
        <Col sm={10}>
          <FormControl type="customer_phone" value={this.props.phone} onChange={(e) => this.props.handleChange("phone", e)} placeholder="Phone" />
        </Col>
      </FormGroup>
    </Form>
		);
	}
}

export default CustomerForm;
