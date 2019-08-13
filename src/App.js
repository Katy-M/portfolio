import React, { useState } from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'
import Footer from './components/Footer'
import Projbar from './components/Projbar';
import Modal from './components/Modal'
import styles from './stylesheet.css'

export default function App() {
  const [showModal, setShowModal] = useState(false);
  if(showModal){
    return(
    <Modal style={{zIndex:'2'}}>
      <div className={styles.overlay}>
        <Heading title='Katy Mollenkopf' />
        <Projbar title="Mods" showModal={showModal} setShowModal={setShowModal}/>
        <AboutBar />
        <Footer />
      </div>
    </Modal>
    );
  }
  else{
    return (
      <React.Fragment>
        <Heading title='Katy Mollenkopf' />
        <Projbar title="Mods" showModal={showModal} setShowModal={setShowModal}/>
        <AboutBar />
        <Footer />
      </React.Fragment>
    );
  }
}
