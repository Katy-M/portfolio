import React from 'react';
import Heading from './components/Heading'
import AboutBar from './components/AboutBar'
import Footer from './components/Footer'
import Projbar from './components/Projbar';
import data from './static/data'

export default function App() {
    return (
      <div>
        <Heading title='Katy Mollenkopf' />
        <Projbar title={data.topbarTitle} projects={data.topbarProjects}/>
        <Projbar title={data.midbarTitle} projects={data.midbarProjects}/>
        <AboutBar />
        <Footer />
      </div>
    );
  }
