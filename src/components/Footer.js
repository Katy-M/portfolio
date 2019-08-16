import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className="row justify-content-center">
            <footer className="footer fixed-bottom bg-dark custom-footer col-lg-12">
                <ul className="row justify-content-center text-center container-fluid">
                    <li className="col-lg-2 col-md-2 col-sm-2"><a href="https://forms.gle/h3kuSmZ7nHFz4txHA">Contact</a></li>
                    <li className="col-lg-2 col-md-2 col-sm-2">
                        <a href="https://www.linkedin.com/in/kmollenkopf/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>
                    <li className="col-lg-2 col-md-2 col-sm-2">
                        <a href="https://github.com/Katy-M">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                    </li>
                    <li className="col-lg-2 col-md-2 col-sm-2">
                        <a href="https://www.nexusmods.com/users/56552092?tab=user+files">
                            <img src={require('../static/nexus.png')} alt='My Nexus Profile'/>
                        </a>
                    </li>
                    <li className="col-lg-2 col-md-2 col-sm-2"><a href={require("../static/resume.pdf")}>Résumé</a></li>
                </ul>
            </footer>
        </div>
    )
}