import React from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'
import Footer from './components/Footer'
import Projbar from './components/Projbar';

export default function App() {
  return (
    <React.Fragment>
      <Heading title='Katy Mollenkopf' />
      <Projbar title="Mods"/>
      <AboutBar />
      <Footer />
    </React.Fragment>
  );
}
