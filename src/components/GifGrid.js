import React /* { useEffect, useState } */ from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
//import { getGif } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';
import PropTypes from "prop-types";


export const GifGrid = ({ category }) => {


    const {data: images, loading} = useFetchGif(category);


    
    
    /* const [images, setimages] = useState([]);
    useEffect(() => {
        getGif(category).then( setimages );
    }, [category]);
 */

    return (
        <>

            <h3 className='animate__animated animate__zoomInDown'> {category} </h3>
            {loading && <p className='animate__animated animate__shakeX'>'Cargando...'</p>}
            
            <div className='cardgrid'>
                {
                     //images.map(img => (
                       // <li key={img.id}>{img.title}</li>
                    //)) 
                    images.map((img) =>
                        <GiftGridItem
                            key={img.id}
                            {...img}
                        />)
                }
            </div>
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}