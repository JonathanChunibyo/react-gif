import React from 'react';
import PropTypes from 'prop-types';

export const GiftGridItem = ({title, url}) => {
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <p>{title}</p>
            <img src= {url} alt={title}/>
        </div>
    )
}
GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired ,
    url: PropTypes.string.isRequired,
}
