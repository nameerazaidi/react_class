import React from 'react';
function Teacher(props)
{
    return(
        <div align="left">
        <b>Teacher Name:  {props.Tchname}</b>
        <br />Subject: {props.subject}
        <br />Zoom Meeting id: {props.Zoomid}
        <br />Zoom Password: {props.Zoompsd}
        </div>
    );
}
export default Teacher;