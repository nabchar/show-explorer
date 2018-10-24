import { expect } from 'chai';
import sinon from 'sinon';
import {
  unmount,
  mount,
  render,
  shallow,
  configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });

global.expect = expect;

global.sinon = sinon;

global.unmount = unmount;
global.mount = mount;
global.render = render;
global.shallow = shallow;

/* eslint import/prefer-default-export: 0 */
export const FAKE_RESPONSE = [
  {
    id: 'a1',
    title: 'Gaycation',
    episodes: 24,
    product_image_url: '/images/gaycation.jpg',
  },
];
