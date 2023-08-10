import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Gallery from './components/Gallery'


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'Gallery') {
      return <Gallery />;
    } return < Contact/>;
  };
  // const handlePageChange = (page) => setCurrentPage(page);


  return (

    
    <div>
       {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}

       {renderPage()}



    </div>
  );
}

export default App;
