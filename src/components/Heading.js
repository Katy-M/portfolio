import React from 'react';

export default function Heading(props){
    return(
        <div className="container-fluid bg-light">
            <h1>{props.title}</h1>
        </div>
    )
}