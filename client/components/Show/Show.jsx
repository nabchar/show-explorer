import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile/Tile';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shows: [] };
  }

  componentDidMount() {
    this.fetchShows();
  }

  async fetchShows() {
    let shows = [];
    try {
      const response = await fetch('http://localhost:3000/shows');
      shows = await response.json();
      this.setState({ shows });
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
    }
  }

  /* eslint camelcase: ["error", {allow: ["product_image_url"]}] */
  render() {
    const { shows } = this.state;
    const { showId } = this.props;
    let ShowTile = '';
    if (shows.length) {
      const {
        title,
        episodes,
        id,
        product_image_url,
      } = shows[showId];
      ShowTile = (
        <Tile
          previous={(showId - 1 + shows.length) % shows.length}
          next={(showId + 1) % shows.length}
          currentId={showId}
          title={title}
          metaType="Episodes"
          meta={episodes}
          id={id}
          image={product_image_url}
        />
      );
    }

    return (
      <div className="content">
        {ShowTile}
      </div>
    );
  }
}

Show.propTypes = {
  showId: PropTypes.number.isRequired,
};

export default Show;
