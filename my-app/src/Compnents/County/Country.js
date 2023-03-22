import React from 'react';
import './Country.css'
const Country = (props) => {
  
    const country=props.country;
    // console.log(country)
    const{flags,name}=country;
    return (
       
        <div className="country">
         <div className=''>
        <h1>{name.common}</h1>
        <img  src={flags.png} alt="" />
        <button className='btn'>Detais</button>
        </div>  
        </div>
    );
};

export default Country;