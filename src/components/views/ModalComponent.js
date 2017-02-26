import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class ModalComponent extends Component {
	render() {
		return (
    <Modal show={this.props.showModal} onHide={this.props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {this.props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {this.props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.handleClick}>{this.props.titleButton}</Button>
        <Button onClick={this.props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
		);
	}
}

export default ModalComponent;
