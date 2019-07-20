import React from 'react';
import aboutText from '../static/data'

export default function AboutBar(){
    return(
        <React.Fragment>
            <div className="row justify-content-center bg-light">
                <div className="col-lg-3 float-left">
                <img 
                    src={require('../static/avatar.jpg')} 
                    alt='Me'
                    className="mx-auto d-block"
                />
                </div>
                <div className="col-lg-8 float-left">
                    <p className="text-left">{aboutText}</p>
                </div>
            </div>
        </React.Fragment>
    )
}