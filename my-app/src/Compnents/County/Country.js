import React from 'react';

const Country = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Country name:{props.name}</h1>
          <span> s <img src={props.flag.png} alt="" /></span>
        </div>
    );
};

export default Country;