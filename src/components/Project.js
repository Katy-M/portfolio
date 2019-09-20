import React, {useState} from 'react'
import Modal from "../Modal/Modal";


export default function Project(props){
    const [showModal, setShowModal] = useState(false);

    const media = props.videoEmbed ?
    <iframe
        title={props.title}
        alt={props.altText}
        src={props.videoEmbed}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe> : <img src={props.img} alt={props.title}/>

    return(
        <React.Fragment>
            <button
                className="col-lg-3 justify-content-center text-center
                            col-md-8 col-sm-9 col-11 project"
                onClick={(() => setShowModal(!showModal))}>
                    <h3>{props.title}</h3>
                    <img src={props.img} alt={props.title}></img>
                    <p>{props.shortDesc}</p>
            </button>
            {showModal && (
            <Modal onModalClose={() => setShowModal(false)}>
                <Modal.Header className>{props.title}</Modal.Header>
                <Modal.Body>
                    {media}
                    <p>{props.fullDesc}</p>
                </Modal.Body>
                <Modal.Footer
                link={props.link}
                linkText={props.linkText}
                link2={props.link2}
                link2Text={props.link2Text}>
                    <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
                </Modal.Footer>
            </Modal>
            )}
        </React.Fragment>
    )
}