import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class CenterLayout extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={1} md={1}></Col>
          <Col xs={4} md={10}>{this.props.children}</Col>
          <Col xs={1} md={1}></Col>
        </Row>
      </Grid>
    );
  }
}

export default CenterLayout;
