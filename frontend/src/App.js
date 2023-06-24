import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import AwardsPage from './pages/awards/AwardsPage';
import HistoryPage from './pages/history/HistoryPage';
import YearWinnerPage from './pages/yearWinner/YearWinnerPage';
import WinnerProfilePage from './pages/winnerProfile/WinnerProfilePage';
import Highlights from './pages/highlights/Highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/awards/:id" element={<HistoryPage />} />
        <Route path="/awards/:awardId/years/:yearId" element={<YearWinnerPage />} />
        <Route path="/profile/:athleteId" element={<WinnerProfilePage />} />
        <Route path='/highlights/:athleteId' element={<Highlights />} />
      </Routes>
    </Router>
  );
};

export default App;