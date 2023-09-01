import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url }) => (
    <div>
        <img src={url} alt='' style={{width:'200px'}} />
    </div>
    );

export default Image;

Image.propTypes = {
    url: PropTypes.string.isRequired,
}