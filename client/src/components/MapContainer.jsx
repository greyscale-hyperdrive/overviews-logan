import React from 'react';
import PropTypes from 'prop-types';
import api_key from '../../../googleMaps.config';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = props => {
  let style = {
    width: '90%',
    height: '27%',
  };
  return (
    <Map google={props.google} zoom={15} style={style} initialCenter={props.location}>
      <Marker position={props.location} />
    </Map>
  );
};

MapContainer.propTypes = {
  location: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: api_key,
})(MapContainer);
