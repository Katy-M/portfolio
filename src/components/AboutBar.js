import React from 'react';

export default function AboutBar(){
    return(
        <React.Fragment>
            <div className="container-fluid">
                <img 
                    src={require('../static/avatar.jpg')} 
                    alt='Me'
                    className="float-left"
                />
            </div>
        </React.Fragment>
    )
}