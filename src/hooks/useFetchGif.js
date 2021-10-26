
import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

export const useFetchGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {

        getGif(category)
        .then( img => {
           setTimeout(() => {
            setstate({
                data: img,
                loading: false
            })
           }, 3000);
        })
    }, [category]);

    return state;
}
