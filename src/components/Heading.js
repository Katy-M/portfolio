import React from 'react';

export default function Heading(props){
    return(
        <div className="row justify-content-center">
            <div className="container-fluid text-center custom-header col-lg-12">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}