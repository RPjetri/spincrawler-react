import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ApiPage from './pages/ApiPage';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import SpincrawlerLogo from './app/assets/img/spincrawler-logo.png';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='FaqPage' element={<FaqPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='ApiPage' element={<ApiPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
