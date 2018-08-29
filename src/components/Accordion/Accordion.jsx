import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ClickableH2, Chevron, Container } from './styles';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  handleToggle = () => this.setState(curState => ({ open: !curState.open }));

  render = () => (
    <Fragment>
      <ClickableH2 onClick={this.handleToggle}>
        {this.props.title}<Chevron open={this.state.open} />
      </ClickableH2>
      <Container open={this.state.open}>
        {this.props.children}
      </Container>
    </Fragment>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Accordion.defaultProps = {
  title: '',
  children: null,
};

export default Accordion;
