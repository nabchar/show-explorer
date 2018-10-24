import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from '../../../shows.json';

const titles = shows.reduce((passedArray, show) => {
  passedArray.push(show.title);
  return passedArray;
}, []);

const Links = titles.map((title, id) => (
  <Link key={title} className="nav-link" to={`/?id=${id}`}>{title}</Link>
));

const Nav = () => <nav className="header">{Links}</nav>;

export default Nav;
