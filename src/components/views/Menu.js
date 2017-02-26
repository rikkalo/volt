import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import CenterLayout from '../../components/layouts/CenterLayout';

class Menu extends Component {
  render() {
    return (
      <Navbar>
				<CenterLayout>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/products">Invoice app</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="/products">Products</NavItem>
						<NavItem eventKey={2} href="/customers">Customers</NavItem>
					</Nav>
				</CenterLayout>
			</Navbar>
    );
  }
}

export default Menu;
