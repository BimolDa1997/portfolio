import React from 'react';
import './App.css';
import Home from './pages/home'
import Header from './pages/Header'
import Test from './pages/Test';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Footer from './pages/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/resume' element={<Resume></Resume>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>} ></Route>
       <Route path='/service' element={<Service></Service>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
