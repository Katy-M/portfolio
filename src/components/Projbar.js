import React from 'react'
import Project from './Project'

export default function Projbar(props){
    return(
        <div className="container-fluid">
            <h2>{props.title}</h2>
            <div className = "row">
                <Project 
                    title="Project 1"
                    img={require("../static/avatar.jpg")}
                    shortDesc="Placeholder description goes here."
                />
            </div>
        </div>
    )
}