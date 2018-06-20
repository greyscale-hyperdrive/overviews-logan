import React from 'react';
import PropTypes from 'prop-types';
import TagEntry from './TagEntry.jsx';
import styles from '../styles/TopTags.css';

class TopTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.sortTags(),
    };
  }

  sortTags() {
    const sortedTags = this.props.tags.sort((tagA, tagB) => tagB.voteCount - tagA.voteCount);
    return sortedTags.slice(0, 6);
  }

  render() {
    return (
      <div className={styles.topTagsContainer}>
        <div className={styles.tagSectionHeader}>Top Tags:</div>
        <div className={styles.tagScrollWrapper}>
          {
            this.state.tags.map((tag, i) => <TagEntry tag={tag} key={i} />)
          }
        </div>
      </div>
    );
  }
}

TopTags.propTypes = {
  tags: PropTypes.array,
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default TopTags;