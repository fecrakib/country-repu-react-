import React from 'react';
import Country from '../County/Country';
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
        <div>
            {
                countries.map(county=>console.log(county))
            }
      {
        countries.map(county=><Country name={county.name.common} flag={county.flags} />)
      }
        </div>
    );
};


export default Counties;