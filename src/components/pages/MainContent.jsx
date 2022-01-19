import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
const MainContent = () => {
  return <BrowserRouter>
  <Container />
    <Routes>
      <Route path="/" element={<Home />} >Home</Route>
      <Route path="/contact" element={<Contact />} >Contact</Route>
    </Routes>
</BrowserRouter>;
};

export default MainContent;
