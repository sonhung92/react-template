import React from 'react';
import PropTypes from 'prop-types';
import { log } from 'common/utils/log';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return <div>ErrorBoundary</div>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {};

export default ErrorBoundary;
