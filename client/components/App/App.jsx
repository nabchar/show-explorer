import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav/Nav';
import Content from '../Show/Show';
import ErrorHandler from '../ErrorHandler';

library.add(faChevronLeft);
library.add(faChevronRight);

export const getShow = (location) => {
  const params = queryString.parse(location.search);
  return params.id ? Number(params.id) : 0;
};

const App = ({ location }) => {
  const showId = getShow(location);
  return (
    <main className="grid-container">
      <ErrorHandler>
        <Nav />
        <Content showId={showId} />
      </ErrorHandler>
    </main>
  );
};


App.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default App;
