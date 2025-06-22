import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  Sidebar, 
  MatchesSection, 
  RankingsSection, 
  NewsSection, 
  StatsSection,
  HeroSection,
  LiveMatches
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('matches');

  const renderMainContent = () => {
    switch (activeSection) {
      case 'matches':
        return <MatchesSection />;
      case 'rankings':
        return <RankingsSection />;
      case 'news':
        return <NewsSection />;
      case 'stats':
        return <StatsSection />;
      default:
        return <MatchesSection />;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="deadlock-layout">
              <Header />
              <div className="main-container">
                <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
                <div className="content-area">
                  <HeroSection />
                  <LiveMatches />
                  {renderMainContent()}
                </div>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;