import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Header from './assets/components/Header'
import Contact from './assets/components/Contact';
import Page3 from './pages/Page3';


const App = () => {
  return (
    < >
       <Router>
       {/* Header is always visible */}
      
      <Routes>
        {/* Group all main pages under the home route */}
        <Route path="/" element={
          <>
            <Header />
            <Page1 />
            <Page2 />
            <Page3 />
          </>
        } />

        {/* Separate Contact page, showing only Contact.jsx */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
