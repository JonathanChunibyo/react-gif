//import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import  {GifGrid}  from './components/GifGrid';

const AppGif = (({categoriesDefault = []}) => {

    //const categorias = ['anime', 'Toons', 'series', 'Novela']
    const [categorias, setcategory] = useState(categoriesDefault);
 /*    const handleAdd = () => {
        setcategory(['HunterXHunter', ...categorias]);
    } */

    return (
        <>
            <h2>Git Expert App</h2>
            < AddCategory setcategory= {setcategory} />
            <hr />

            <ol>
                {
                    categorias.map((category) => (
                        <GifGrid 
                        key= {category+Math.random()} 
                        category= {category}
                        />
                    ))
                }
            </ol>
            {/* <button onClick={handleAdd}> Añadir </button> */}
        </>
    );
});

export default AppGif;