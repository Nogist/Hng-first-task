import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/Hng-first-task-linktree" element={<Home />} />
      <Route path="/Hng-first-task-linktree/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
