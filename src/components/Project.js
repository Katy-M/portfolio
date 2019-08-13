import React from 'react'

export default function Project(props){
    return(
        <button
            className="col-lg-4 justify-content-center text-center"
            onClick={(()=>props.setShowModal(true))}>
                <h3>{props.title}</h3>
                <img src={props.img} alt="Project"></img>
                <p>{props.shortDesc}</p>
        </button>
    )
}