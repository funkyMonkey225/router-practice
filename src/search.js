import React from 'react';

const SearchInput = ({text, changeHandler}) => (
     <input 
        onChange={changeHandler} 
        type="text" 
        value={text} />
)

export default SearchInput;