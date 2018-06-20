import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);

    let displayDescription = this.props.description;
    if (displayDescription.length > 259) {
      displayDescription = displayDescription.slice(0, 260) + '...';
    };
    this.state = {
      displayDescription: displayDescription,
      showAll: false,
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription(event) {
    event.preventDefault();
    this.setState({
      showAll: !this.state.showAll,
    });
  }

  render() {
    let isLengthy = this.state.displayDescription !== this.props.description;

    if (isLengthy) {
      return (
        <div className={styles.restaurantDescription}>
          <div>
            {!this.state.showAll ? this.state.displayDescription : this.props.description}
          </div>
          <a className={styles.toggleDescription} href="#" onClick={this.toggleDescription}>{this.state.showAll ? '- Read Less' : '+ Read More'}</a>
        </div>
      );
    }
    return (
      <div className={styles.restaurantDescription}>{this.props.description}</div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
