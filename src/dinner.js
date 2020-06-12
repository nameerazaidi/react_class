import React from 'react';
function Dinner(props)
{
    return(
        <div>
        <h1>I have biryani with {props.dishname}</h1>
        <h2>Nameera serving {props.sweet}</h2>
        </div>
    );
}
export default Dinner;