import React from 'react'

export default function Projbar(props){
    return(
        <div className = "row justify-content-center">
            <div className="container-fluid projbar col-lg-12">
                <h2 id="title">{props.title}</h2>
                <div className = "row justify-content-center">
                    {props.projects}
                </div>
            </div>
        </div>
    )
}