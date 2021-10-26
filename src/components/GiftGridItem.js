import React from 'react'

export const GiftGridItem = ({title, url}) => {
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <p>{title}</p>
            <img src= {url} alt={title}/>
        </div>
    )
}
