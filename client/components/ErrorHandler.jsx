import React from 'react';
import PropTypes from 'prop-types';

const errorImg = {
  width: '250px',
  height: '200px',
};

const errorBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log({ error }, { info });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="content" style={errorBox}>
          <h1 className="title">Something went wrong.</h1>
          <p className="message">
            Click
            <a href="/?id=0"> here </a>
            to return to a page that makes sense!
          </p>
          <figure style={errorImg}>
            <img src="/images/error.png" alt="Error" />
          </figure>
        </div>
      );
    }
    return children;
  }
}

/* eslint react/require-default-props: off */
ErrorHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element,
    ),
  ]).isRequired,
};


export default ErrorHandler;
