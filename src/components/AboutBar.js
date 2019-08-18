import React from 'react';
import data from '../static/data'

export default function AboutBar(){
    return(
        <React.Fragment>
            <div className="row justify-content-center aboutbar">
                <div className="col-lg-3 col-md-4 float-left">
                <img 
                    src={require('../static/avatar.jpg')} 
                    alt='Me'
                    className="mx-auto d-block"
                />
                </div>
                <div className="col-lg-8 col-md-8 float-left">
                    <p className="text-left">{data.aboutText}</p>
                </div>
            </div>
        </React.Fragment>
    )
}