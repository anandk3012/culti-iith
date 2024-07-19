import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../pages/UserDashboard';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Nav1bar from '../components/Nav1bar';
import Infocus from '../pages/clubPages/Infocus';
import Shuffle from '../pages/clubPages/Shuffle';
import Btl from '../pages/clubPages/Btl';
import Gesture from '../pages/clubPages/Gesture';
import Otaku from '../pages/clubPages/Otaku';
import Ebsb from '../pages/clubPages/Ebsb';
import Writing from '../pages/clubPages/Writing';
import Quiz from '../pages/clubPages/Quiz';
import Rdm from '../pages/clubPages/Rdm';
import Bmc from '../pages/clubPages/Bmc';
import Debate from '../pages/clubPages/Debate';
import WordGames from '../pages/clubPages/WordGames';
import Vibes from '../pages/clubPages/Vibes';
import Load1 from '../pages/loadingPages/Load1';

export default function UserRoutes() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading completion after a certain time
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 5000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loadingComplete ? (
        <>
          <Nav1bar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/dashboard' element={<UserDashboard />} />

            {/* ClubPages Routes */}
            {/* Culti Clubs */}
            <Route path='/infocus' element={<Infocus />} />
            <Route path='/shuffle' element={<Shuffle />} />
            <Route path='/btl' element={<Btl />} />
            <Route path='/gesture' element={<Gesture />} />
            <Route path='/otaku' element={<Otaku />} />
            <Route path='/ebsb' element={<Ebsb />} />
            <Route path='/rdm' element={<Rdm />} />
            <Route path='/vibes' element={<Vibes />} />

            {/* LitSoc */}
            <Route path='/writing' element={<Writing />} />
            <Route path='/bmc' element={<Bmc />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/debate' element={<Debate />} />
            <Route path='/wordgames' element={<WordGames />} />
          </Routes>
        </>
      ) : (
        <Load1 />
      )}
    </div>
  );
}
