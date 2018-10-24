import React from 'react';
import fetchMock from 'fetch-mock';
import waitUntil from 'async-wait-until';
import Show from './Show';
import { FAKE_RESPONSE } from '../../../test/helpers';

/* eslint no-undef: 0, no-unused-vars: 0 */
describe('Show Component', () => {
  before(() => {
    fetchMock.get('*', FAKE_RESPONSE);
  });

  after(() => {
    fetchMock.reset();
    Show.prototype.componentDidMount.restore();
  });

  it('should render the ShowTile Wrapper', () => {
    const wrapper = shallow(<Show showId={0} />);
    expect(wrapper.find('.content')).to.have.length(1);
  });

  it('should call componentDidMount() lifecycle method', () => {
    sinon.spy(Show.prototype, 'componentDidMount');

    const wrapper = mount(<Show showId={0} />);
    expect(Show.prototype.componentDidMount.calledOnce).to.equal(true);
    wrapper.unmount();
  });

  it('should initialize with an empty array of shows', async () => {
    const wrapper = await mount(<Show showId={0} />);
    expect(wrapper.state().shows).to.have.length(0);
    wrapper.unmount();
  });

  it('should fetch an array of shows', async () => {
    const wrapper = shallow(<Show showId={0} />);
    expect(wrapper.state().shows).to.have.length(0);
    await waitUntil(() => wrapper.state().shows.length !== 0);
    expect(wrapper.state().shows).to.have.length(1);
  });
});
