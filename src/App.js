import React, { useState } from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'
import Footer from './components/Footer'
import Projbar from './components/Projbar';

export default function App() {
  const [showModal, setShowModal] = useState(false);
    return (
      <div>
        <Heading title='Katy Mollenkopf' />
        <Projbar title="Mods" showModal={showModal} setShowModal={setShowModal}/>
        <AboutBar />
        <Footer />
      </div>
    );
  }
