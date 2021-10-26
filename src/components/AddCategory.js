import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({ setcategory }) => {
    const vacio = () => {
        setinputValue('');
    }
    const [inputValue, setinputValue] = useState('');
    const handleInputvalue = (e) => {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategory(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }
    return (

        <form onSubmit={handleSubmit}>

            <h1> {inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputvalue}
                onClick={vacio}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategory: PropTypes.func.isRequired ,
}

