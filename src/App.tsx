import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import Input from './pages/InputPage';

function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/Asian-Website">
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
