import React from 'react';
import Logo from '../../components/Logo';
import './index.css';
import SolutionSection from '../../components/SolutionSection';
import SolutionCategories from '../../components/SolutionCategories';
import Contactus from '../../components/Contactus';

function App(props) {
  return (
    <>
      <Logo />
      <SolutionSection />
      <SolutionCategories />
      <Contactus />
    </>
  );
}

export default App;
