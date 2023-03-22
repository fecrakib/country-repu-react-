import React from 'react';
import Country from '../County/Country';
import './Countries.css'
import { useState,useEffect } from 'react';
const Counties = () => {
    const [countries,setCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    // console.log(coutnries)
    return (
        <div className='contries-container'>
            {
                // countries.map(county=>console.log(county))
            }
      {
        countries.map(county=><Country 
            country={county}  key={county.cca3}
            flag={county.flags} />)
      }
        </div>
    );
};


export default Counties;