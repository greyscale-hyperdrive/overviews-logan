import React from 'react';
import PropTypes from 'prop-types';
import icons from '../icons.jsx';
import styles from '../styles/RestaurantInfoEntry.css';

const RestaurantInfoEntry = (props) => {
  const sectionTitles = {
    dining_style: 'Dining Style',
    cuisine: 'Cuisine',
    hours_of_operation: 'Hours of Operation',
    phone_number: 'Phone Number',
    website: 'Website',
    payment_options: 'Payment Options',
    dress_code: 'Dress Code',
    executive_chef: 'Executive Chef',
    neighborhood: 'Neighborhood',
    cross_street: 'Cross Street',
    parking_details: 'Parking Details',
    public_transit: 'Public Transit',
    tags: 'Additional',
  };

  if (props.section === 'hours_of_operation') {
    return (
      <div className={styles.infoSection}>
        {icons.hours_of_operation}
        <span className={styles.infoTitle}>{sectionTitles.hours_of_operation}</span>
        <div className={styles.infoContent}>
          <div>{props.restaurant.hours_of_operation.breakfast}</div>
          <div>{props.restaurant.hours_of_operation.lunch}</div>
          <div>{props.restaurant.hours_of_operation.dinner}</div>
        </div>
      </div>
    );
  } else if (props.section === 'website') {
    return (
      <div className={styles.infoSection}>
        {icons.website}
        <span className={styles.infoTitle}>{sectionTitles.website}</span>
        <div className={styles.infoContent}>
          <a className={styles.websiteInfo} href={props.restaurant.website}>{props.restaurant.website}</a>
        </div>
      </div>
    );
  } else if (props.section === 'address') {
    return (
      <div className={`${styles.infoSection} ${styles.belowMap}`}>
        {icons.address}
        <span className={styles.infoTitle}>{props.restaurant.address}</span>
      </div>
    );
  } else if (props.section === 'tags') {
    const tagNames = props.restaurant.tags.map(tagObj => tagObj.tagName);
    return (
      <div className={styles.infoSection}>
        {icons.tags}
        <span className={styles.infoTitle}>{sectionTitles.tags}</span>
        <div className={styles.infoContent}>
          {tagNames.join(', ')}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.infoSection}>
      {icons[props.section]}
      <span className={styles.infoTitle}>{sectionTitles[props.section]}</span>
      <div className={styles.infoContent}>
        {props.restaurant[props.section]}
      </div>
    </div>
  );
};

RestaurantInfoEntry.propTypes = {
  section: PropTypes.string,
  restaurant: PropTypes.object,
};

export default RestaurantInfoEntry;
