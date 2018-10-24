import React from 'react';
import { MemoryRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import { FAKE_RESPONSE } from '../../../test/helpers';
import Root from './Root';
import App from '../App/App';


/* eslint no-undef: 0 */
describe('Root Container', () => {
  before(() => {
    fetchMock.get('*', FAKE_RESPONSE);
  });

  after(() => {
    fetchMock.reset();
  });

  it('should render the Router wrapper', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find(Router)).to.have.length(1);
  });

  it('should land on the index page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/" component={App} />
      </MemoryRouter>,
    );
    expect(wrapper.find(App)).to.have.length(1);
    wrapper.unmount();
  });
});
