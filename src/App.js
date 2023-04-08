import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import AppPage from './pages/appPage/AppPage';
import Apropo from './pages/apropo/Apropo';
import NotFound from './pages/notFound/NotFound';

function App() {
  
  return (

    <>
      <Navbar />
      
      <Routes basename={process.env.PUBLIC_URL} >

        <Route path='/' element={ <Home /> }/>
        <Route path='/logement/:id' element={ <AppPage /> }/>
        <Route path='/about' element={ <Apropo /> }/>
        <Route path='*' element={ <NotFound /> }/>
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;


