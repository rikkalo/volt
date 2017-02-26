import React, { Component } from 'react';
import CenterLayout from './CenterLayout';
import Menu from '../../components/views/Menu';

class MainLayout extends Component {
  render() {
    return (
		<div className="main">
			<Menu />
			<main>
				<CenterLayout>
					{this.props.children}
				</CenterLayout>
			</main>
		</div>
    );
  }
}

export default MainLayout;
