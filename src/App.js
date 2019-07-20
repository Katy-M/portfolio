import React from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <React.Fragment>
      <Heading title='Katy Mollenkopf' />
      <AboutBar />
      <Footer />
    </React.Fragment>
  );
}
