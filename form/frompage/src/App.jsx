import React from 'react';
import MaternitySchemeForm from './Components/MaternitySchemeForm';
import { Route, Routes } from 'react-router-dom';
import EducationSchemeForm from './Components/EducationSchemeForm';
import LivelihoodSchemeForm from './Components/LivelihoodSchemeForm';


function App() {
  return (
    <>
      <Routes>
        <Route path='/maternity' element={< MaternitySchemeForm/>}/>
        <Route path='/education' element={< EducationSchemeForm/>}/>
        <Route path='/livelihood' element={<LivelihoodSchemeForm/>}/>
        
      </Routes>
    </>
  );
}

export default App;
