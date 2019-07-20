import React from 'react';
import { avatar } from '../static/avatar'

export default function AboutBar(){
    return(
        <React.Fragment className="container-fluid bg-dark">
            <img 
                href={avatar} 
                alt="Me"
                className="float-left"
            />
        </React.Fragment>
    )
}