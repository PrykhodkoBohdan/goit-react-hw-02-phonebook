import React from "react"; 


const Filter = ({value, onChange}) => (
    <label htmlFor="search">
       <p className=''>Find contacts by name</p> 
       <input
      type="search"
      name="search"
      id="search"
      onChange={onChange}
      value={value}
    />
  </label>
);

export default Filter;