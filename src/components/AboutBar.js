import React from 'react';

export default function AboutBar(props){
    return(
        <React.Fragment className="container-fluid bg-dark">
            <img 
                href={props.href} 
                alt={props.alt}
                className="float-right"
            />
        </React.Fragment>
    )
}