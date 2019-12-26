import React from 'react'

export default function Projbar(props){
    return(
        <div className = "row justify-content-center">
            <div className="col-lg-12 projbar">
                <h2 id="title">{props.title}</h2>
                <div className = "row projgroup">
                    {props.projects}
                </div>
            </div>
        </div>
    )
}