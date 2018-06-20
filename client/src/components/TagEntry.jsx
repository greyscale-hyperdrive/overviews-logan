import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TagEntry.css';

const TagEntry = props => (
  <div className={styles.tag}>
    {props.tag.tagName}
  </div>
);

TagEntry.propTypes = {
  tag: PropTypes.object,
};

export default TagEntry;
