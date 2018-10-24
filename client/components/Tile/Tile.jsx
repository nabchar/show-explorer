import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tile = (props) => {
  const {
    previous,
    next,
    title,
    meta,
    metaType,
    image,
    id,
  } = props;

  return (
    <section className="tile" key={id}>
      <div className="image-container">
        <Link className="previous" to={`/?id=${previous}`}><FontAwesomeIcon icon="chevron-left" /></Link>
        <figure>
          <img src={image} alt="" />
        </figure>
        <Link className="next" to={`/?id=${next}`}><FontAwesomeIcon icon="chevron-right" /></Link>
      </div>
      <p className="meta">{`${meta} ${metaType}`}</p>
      <h3 className="title">{title}</h3>
    </section>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  metaType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  next: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
};

export default Tile;
