import React from 'react';
import Nav from './Nav';
import { shows } from '../../../shows.json';

/* eslint no-undef: 0, no-unused-vars: 0 */
describe('Nav Component', () => {
  it('should render the Nav wrapper', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('should render one Link for every show', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('.header').children()).to.have.length(shows.length);
  });
});
