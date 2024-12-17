import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  useEffect(() => {
    let isScrolling = false;
    let currentPage = 0;

    const handleScroll = (event) => {
      if (isScrolling) return;

      isScrolling = true;

      if (event.deltaY > 0) {
        currentPage += 1;
      } else {
        currentPage -= 1;
      }

      const maxPages = 3;
      if (currentPage < 0) currentPage = 0;
      if (currentPage > maxPages) currentPage = maxPages;

      window.scrollTo({
        top: window.innerHeight * currentPage,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 0);
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
