import React from 'react'
import Project from './Project'

export default function Projbar(props){
    return(
        <div className = "row justify-content-center">
            <div className="container-fluid projbar col-lg-12">
                <h2>{props.title}</h2>
                <div className = "row justify-content-center">
                    <Project
                        title="Project 1"
                        img={require("../static/avatar.jpg")}
                        shortDesc="Placeholder description goes here."
                    />
                    <Project
                        title="Project 2"
                        img={require("../static/avatar.jpg")}
                        shortDesc="Placeholder description goes here."
                    />
                    <Project
                        title="Project 3"
                        img={require("../static/avatar.jpg")}
                        shortDesc="Placeholder description goes here."
                    />
                </div>
            </div>
        </div>
    )
}