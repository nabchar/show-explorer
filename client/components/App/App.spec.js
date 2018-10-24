import React from 'react';
import App, { getShow } from './App';
import ErrorHandler from '../../components/ErrorHandler';
import Show from '../../components/Show/Show';
import Nav from '../../components/Nav/Nav';

/* eslint no-undef: 0 */
describe('App Local Props', () => {
  it('should parse showId from the query string', () => {
    const location = { search: '?id=7' };
    const showId = getShow(location);
    expect(showId).to.equal(7);
  });

  it('should return the first showId if there is no query string ', () => {
    const location = { search: '' };
    const showId = getShow(location);
    expect(showId).to.equal(0);
  });
});

describe('App Container', () => {
  it('should render the main wrapper', () => {
    const location = { search: '?id=7' };
    const wrapper = shallow(<App location={location} />);
    expect(wrapper.find('main')).to.have.length(1);
  });

  it('should wrap an ErrorHandler around children', () => {
    const location = { search: '?id=7' };
    const wrapper = shallow(<App location={location} />);
    expect(wrapper.find(ErrorHandler)).to.have.length(1);
  });

  it('should render a Show', () => {
    const location = { search: '?id=7' };
    const wrapper = shallow(<App location={location} />);
    expect(wrapper.find(Show)).to.have.length(1);
  });

  it('should render a Nav', () => {
    const location = { search: '?id=7' };
    const wrapper = shallow(<App location={location} />);
    expect(wrapper.find(Nav)).to.have.length(1);
  });
});
