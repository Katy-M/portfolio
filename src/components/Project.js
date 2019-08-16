import React from 'react'
import Modal from "../Modal/Modal";

export default function Project(props){
    return(
        <React.Fragment>
            <button
                className="col-lg-4 justify-content-center text-center"
                onClick={(()=>props.setShowModal(!props.showModal))}>
                    <h3>{props.title}</h3>
                    <img src={props.img} alt="Project"></img>
                    <p>{props.shortDesc}</p>
            </button>
            {props.showModal && (
            <Modal onModalClose={() => props.setShowModal(false)}>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>Body</Modal.Body>
            <Modal.Footer>
                <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
            </Modal.Footer>
        </Modal>
      )}
        </React.Fragment>
    )
}