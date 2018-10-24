import React from 'react';

import Tile from './Tile';
import { FAKE_RESPONSE } from '../../../test/helpers';

/* eslint no-undef: 0, no-unused-vars: 0 */
/* eslint camelcase: ["error", {allow: ["product_image_url"]}] */
describe('Tile Component', () => {
  const shallowTile = () => {
    const {
      title,
      episodes,
      id,
      product_image_url,
    } = FAKE_RESPONSE[0];
    return shallow(
      <Tile
        previous={0}
        next={1}
        currentId={0}
        title={title}
        metaType="Episodes"
        meta={episodes}
        id={id}
        image={product_image_url}
      />,
    );
  };

  it('should render the .tile wrapper', () => {
    const wrapper = shallowTile();
    expect(wrapper.find('.tile')).to.have.length(1);
  });

  it('should have a title', () => {
    const wrapper = shallowTile();
    expect(wrapper.find('.title').text()).to.equal('Gaycation');
  });

  it('should have a subtitle', () => {
    const wrapper = shallowTile();
    expect(wrapper.find('.meta').text()).to.equal('24 Episodes');
  });

  it('should have a image', () => {
    const wrapper = shallowTile();
    expect(wrapper.find('img').props().src).to.equal('/images/gaycation.jpg');
  });
});
