import React from 'react'
import { useState } from 'react'
import Popup from './Popup'

export default function Project(props){
    const [displayPopup, setDisplayPopup] = useState(false)
    if(displayPopup){
        return(
            <div className="modal" role="dialog">
                <Popup modal-dialog></Popup>
            </div>
        )
    }
    else{
        return(
            <button
                data-toggle="modual"
                className="col-lg-4 justify-content-center text-center"
                onClick={(()=>setDisplayPopup(true))}>
                    <h3>{props.title}</h3>
                    <img src={props.img} alt="Project"></img>
                    <p>{props.shortDesc}</p>
            </button>
        )
    }
}