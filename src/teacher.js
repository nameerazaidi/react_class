import React from 'react';
function Teacher(props)
{
    return(
        <div align="left">
        <h2>Teacher Name:  {props.Tchname}</h2>
        <h3>Subject: {props.subject}</h3>
        <h3>Zoom Meeting id: {props.Zoomid}</h3>
        <h3>Zoom Password: {props.Zoompsd}</h3>
        </div>
    );
}
export default Teacher;