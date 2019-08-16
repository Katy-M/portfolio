import React, {useState} from 'react'
import Modal from "../Modal/Modal";


export default function Project(props){
    const [showModal, setShowModal] = useState(false);

    return(
        <React.Fragment>
            <button
                className="col-lg-3 justify-content-center text-center
                            col-md-8 col-sm-9 col-11 project"
                onClick={(() => setShowModal(!showModal))}>
                    <h3>{props.title}</h3>
                    <img src={props.img} alt="Project"></img>
                    <p>{props.shortDesc}</p>
            </button>
            {showModal && (
            <Modal onModalClose={() => setShowModal(false)}>
                <Modal.Header>{props.title}</Modal.Header>
                <Modal.Body>
                    <img src={props.img} alt="Project"></img>
                    <p>{props.fullDesc}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
                </Modal.Footer>
            </Modal>
            )}
        </React.Fragment>
    )
}