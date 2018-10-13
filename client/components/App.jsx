import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
