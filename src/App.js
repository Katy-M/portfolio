import React from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'

export default function App() {
  return (
    <React.Fragment>
      <Heading title='Katy Mollenkopf' />
      <AboutBar
        href='../static/avatar'
        alt='A photo of me'
      />
    </React.Fragment>
  );
}
