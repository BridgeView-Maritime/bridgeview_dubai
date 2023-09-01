import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Admin from './Component/Admin';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Charteringvessels from './Component/Charteringvessels';
import Getaquote from './Component/Getintouch/Getaquote';
import Generalenquiry from './Component/Getintouch/Generalenquiry';
import Marinetechnician from './Component/Marinetechnician';
import Pilotingtowingservices from './Component/Pilotingtowingservices';
import Portmanagement from './Component/Portmanagement';
import Salvagingdistressvessel from './Component/Salvagingdistressvessel';
import Shipintermediator from './Component/Shipintermediator';
import Shipoperations from './Component/Shipoperations';
import Vesselclassificationservices from './Component/Vesselclassificationservices';
import Vesselinspection from './Component/Vesselinspection';

function App() {
  return (
    <><Router>
      <Navbar/>
      <Routes>
          <Route>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/admin" element={<Admin/>} />
          <Route exact path="/marinetechnician" element={<Marinetechnician/>} />
          <Route exact path="/Charteringvessels" element={<Charteringvessels/>} />
          <Route exact path="/pilotingtowingservices" element={<Pilotingtowingservices/>} />
          <Route exact path="/portmanagement" element={<Portmanagement/>} />
          <Route exact path="/salvagingdistressvessel" element={<Salvagingdistressvessel/>} />
          <Route exact path="/shipintermediator" element={<Shipintermediator/>} />
          <Route exact path="/shipoperations" element={<Shipoperations/>} />
          <Route exact path="/Vesselclassificationservices" element={<Vesselclassificationservices/>} />
          <Route exact path="/vesselinspection" element={<Vesselinspection/>} />



          <Route exact path="/getaquote" element={<Getaquote/>} />

          <Route exact path="/generalenquiry" element={<Generalenquiry/>} />






          </Route>
      </Routes>
      <Footer/>
    </Router>
       
    </>
  );
}

export default App;
