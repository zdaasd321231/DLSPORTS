import React, { useState } from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">DL<span className="logo-accent">SPORTS</span></h1>
          <span className="tagline">Esports Coverage</span>
        </div>
        <nav className="main-nav">
          <a href="#matches" className="nav-link">Matches</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#rankings" className="nav-link">Rankings</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#stats" className="nav-link">Stats</a>
          <a href="#forums" className="nav-link">Forums</a>
        </nav>
        <div className="header-actions">
          <button className="live-indicator">
            <span className="live-dot"></span>
            LIVE
          </button>
          <div className="user-menu">
            <span className="user-icon">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Navigation</h3>
        <ul className="sidebar-menu">
          <li className={`sidebar-item ${activeSection === 'matches' ? 'active' : ''}`} 
              onClick={() => setActiveSection('matches')}>
            <span className="sidebar-icon">⚔️</span>
            Matches
          </li>
          <li className={`sidebar-item ${activeSection === 'rankings' ? 'active' : ''}`} 
              onClick={() => setActiveSection('rankings')}>
            <span className="sidebar-icon">🏆</span>
            Rankings
          </li>
          <li className={`sidebar-item ${activeSection === 'news' ? 'active' : ''}`} 
              onClick={() => setActiveSection('news')}>
            <span className="sidebar-icon">📰</span>
            News
          </li>
          <li className={`sidebar-item ${activeSection === 'stats' ? 'active' : ''}`} 
              onClick={() => setActiveSection('stats')}>
            <span className="sidebar-icon">📊</span>
            Statistics
          </li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-title">Quick Access</h3>
        <div className="quick-access">
          <div className="tournament-widget">
            <h4>Major Tournament</h4>
            <p className="tournament-name">Deadlock World Championship</p>
            <div className="tournament-date">Dec 15-18, 2024</div>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Top Teams</h3>
        <div className="mini-rankings">
          <div className="mini-rank-item">
            <span className="rank-number">1</span>
            <span className="team-name">Phantom Collective</span>
          </div>
          <div className="mini-rank-item">
            <span className="rank-number">2</span>
            <span className="team-name">Nexus Gaming</span>
          </div>
          <div className="mini-rank-item">
            <span className="rank-number">3</span>
            <span className="team-name">Void Runners</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Лучший портал киберспорта по Deadlock</h1>
        <p className="hero-subtitle">Прямые трансляции матчей, освещение турниров, статистика игроков и последние новости из мира киберспорта Deadlock</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">156</span>
            <span className="stat-label">Live Matches Today</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2.4M</span>
            <span className="stat-label">Active Players</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$500K</span>
            <span className="stat-label">Prize Pool</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg" alt="Deadlock Gaming" />
      </div>
    </section>
  );
};

// Live Matches Component
export const LiveMatches = () => {
  const liveMatches = [
    { 
      id: 1, 
      team1: "Phantom Collective", 
      team2: "Nexus Gaming", 
      score: "2-1", 
      status: "LIVE",
      tournament: "DWC 2024",
      viewers: "45.2K"
    },
    { 
      id: 2, 
      team1: "Void Runners", 
      team2: "Iron Legion", 
      score: "1-1", 
      status: "LIVE",
      tournament: "Pro League",
      viewers: "23.8K"
    },
    { 
      id: 3, 
      team1: "Digital Storm", 
      team2: "Crimson Guard", 
      score: "0-2", 
      status: "LIVE",
      tournament: "Regional Cup",
      viewers: "18.5K"
    }
  ];

  return (
    <section className="live-matches">
      <div className="section-header">
        <h2 className="section-title">
          <span className="live-indicator">🔴 LIVE</span>
          Live Matches
        </h2>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="matches-grid">
        {liveMatches.map(match => (
          <div key={match.id} className="match-card live">
            <div className="match-header">
              <span className="tournament-name">{match.tournament}</span>
              <span className="viewers">👁️ {match.viewers}</span>
            </div>
            <div className="match-teams">
              <div className="team">
                <span className="team-name">{match.team1}</span>
              </div>
              <div className="match-score">
                <span className="score">{match.score}</span>
                <span className="match-status live">{match.status}</span>
              </div>
              <div className="team">
                <span className="team-name">{match.team2}</span>
              </div>
            </div>
            <div className="match-actions">
              <button className="watch-btn">Watch Live</button>
              <button className="stats-btn">Stats</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Matches Section Component
export const MatchesSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingMatches = [
    {
      id: 1,
      time: "18:00",
      date: "Today",
      team1: "Shadow Operatives",
      team2: "Lightning Squad",
      tournament: "Deadlock Major",
      bo: "BO3"
    },
    {
      id: 2,
      time: "20:30",
      date: "Today", 
      team1: "Cyber Knights",
      team2: "Neon Wolves",
      tournament: "Pro Circuit",
      bo: "BO5"
    },
    {
      id: 3,
      time: "14:00",
      date: "Tomorrow",
      team1: "Quantum Raiders",
      team2: "Steel Titans",
      tournament: "Regional Cup",
      bo: "BO3"
    }
  ];

  const recentResults = [
    {
      id: 1,
      team1: "Phantom Collective",
      team2: "Nexus Gaming", 
      score: "3-1",
      tournament: "DWC 2024",
      date: "2 hours ago"
    },
    {
      id: 2,
      team1: "Void Runners",
      team2: "Digital Storm",
      score: "2-0", 
      tournament: "Pro League",
      date: "5 hours ago"
    },
    {
      id: 3,
      team1: "Iron Legion",
      team2: "Crimson Guard",
      score: "1-2",
      tournament: "Regional Cup", 
      date: "1 day ago"
    }
  ];

  return (
    <section className="matches-section">
      <div className="section-tabs">
        <button 
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Matches
        </button>
        <button 
          className={`tab ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          Recent Results
        </button>
      </div>

      {activeTab === 'upcoming' && (
        <div className="matches-list">
          {upcomingMatches.map(match => (
            <div key={match.id} className="match-item">
              <div className="match-time">
                <span className="time">{match.time}</span>
                <span className="date">{match.date}</span>
              </div>
              <div className="match-info">
                <div className="teams">
                  <span className="team-name">{match.team1}</span>
                  <span className="vs">vs</span>
                  <span className="team-name">{match.team2}</span>
                </div>
                <div className="match-details">
                  <span className="tournament">{match.tournament}</span>
                  <span className="format">{match.bo}</span>
                </div>
              </div>
              <div className="match-actions">
                <button className="preview-btn">Preview</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'results' && (
        <div className="results-list">
          {recentResults.map(result => (
            <div key={result.id} className="result-item">
              <div className="result-teams">
                <span className="team-name winner">{result.team1}</span>
                <span className="score">{result.score}</span>
                <span className="team-name">{result.team2}</span>
              </div>
              <div className="result-details">
                <span className="tournament">{result.tournament}</span>
                <span className="date">{result.date}</span>
              </div>
              <div className="result-actions">
                <button className="details-btn">Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// Rankings Section Component
export const RankingsSection = () => {
  const teamRankings = [
    { rank: 1, team: "Phantom Collective", rating: 1847, change: "+2" },
    { rank: 2, team: "Nexus Gaming", rating: 1823, change: "0" },
    { rank: 3, team: "Void Runners", rating: 1798, change: "+1" },
    { rank: 4, team: "Digital Storm", rating: 1776, change: "-2" },
    { rank: 5, team: "Iron Legion", rating: 1751, change: "+3" },
    { rank: 6, team: "Crimson Guard", rating: 1734, change: "-1" },
    { rank: 7, team: "Shadow Operatives", rating: 1712, change: "+1" },
    { rank: 8, team: "Lightning Squad", rating: 1695, change: "-1" },
    { rank: 9, team: "Cyber Knights", rating: 1678, change: "+2" },
    { rank: 10, team: "Neon Wolves", rating: 1656, change: "0" }
  ];

  return (
    <section className="rankings-section">
      <div className="section-header">
        <h2 className="section-title">Team Rankings</h2>
        <div className="ranking-info">
          <span>Updated: 2 hours ago</span>
        </div>
      </div>

      <div className="rankings-table">
        <div className="table-header">
          <span className="rank-col">Rank</span>
          <span className="team-col">Team</span>
          <span className="rating-col">Rating</span>
          <span className="change-col">Change</span>
        </div>
        
        {teamRankings.map(team => (
          <div key={team.rank} className="ranking-row">
            <span className="rank-number">{team.rank}</span>
            <span className="team-name">{team.team}</span>
            <span className="rating">{team.rating}</span>
            <span className={`change ${team.change.includes('+') ? 'positive' : team.change.includes('-') ? 'negative' : 'neutral'}`}>
              {team.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// News Section Component
export const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Phantom Collective Dominates Deadlock World Championship Semi-Finals",
      summary: "In a stunning display of tactical prowess, Phantom Collective secured their spot in the finals...",
      image: "https://images.pexels.com/photos/7562468/pexels-photo-7562468.jpeg",
      category: "Tournament",
      time: "2 hours ago",
      author: "Alex Chen"
    },
    {
      id: 2,
      title: "New Hero 'Shadowweaver' Announced for Competitive Play",
      summary: "Valve reveals the latest addition to Deadlock's roster, bringing unique stealth mechanics...",
      image: "https://images.pexels.com/photos/7776899/pexels-photo-7776899.jpeg",
      category: "Game Update",
      time: "6 hours ago", 
      author: "Sarah Kim"
    },
    {
      id: 3,
      title: "Major Balance Changes Hit Professional Scene",
      summary: "Latest patch brings significant adjustments to core gameplay mechanics, affecting pro strategies...",
      image: "https://images.unsplash.com/photo-1569965352022-f014c3ca4c5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBzZXR1cHxlbnwwfHx8cHVycGxlfDE3NTA1ODgzODB8MA&ixlib=rb-4.1.0&q=85",
      category: "Analysis",
      time: "1 day ago",
      author: "Marcus Rodriguez" 
    },
    {
      id: 4,
      title: "Interview: Nexus Gaming Captain Discusses Championship Strategy",
      summary: "Exclusive sit-down with team captain reveals preparation tactics for upcoming matches...",
      image: "https://images.pexels.com/photos/7544433/pexels-photo-7544433.jpeg",
      category: "Interview", 
      time: "1 day ago",
      author: "Jennifer Lee"
    }
  ];

  return (
    <section className="news-section">
      <div className="section-header">
        <h2 className="section-title">Latest News</h2>
        <div className="news-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Tournament</button>
          <button className="filter-btn">Game Updates</button>
          <button className="filter-btn">Interviews</button>
        </div>
      </div>

      <div className="news-grid">
        {newsArticles.map(article => (
          <article key={article.id} className="news-card">
            <div className="news-image">
              <img src={article.image} alt={article.title} />
              <span className="news-category">{article.category}</span>
            </div>
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              <div className="news-meta">
                <span className="news-author">By {article.author}</span>
                <span className="news-time">{article.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// Stats Section Component
export const StatsSection = () => {
  const [activeStatsTab, setActiveStatsTab] = useState('players');
  
  const playerStats = [
    { rank: 1, player: "ShadowMaster", team: "Phantom Collective", kda: "2.43", rating: 1.28, maps: 47 },
    { rank: 2, player: "NexusKing", team: "Nexus Gaming", kda: "2.31", rating: 1.24, maps: 52 },
    { rank: 3, player: "VoidWalker", team: "Void Runners", kda: "2.18", rating: 1.19, maps: 43 },
    { rank: 4, player: "DigitalGhost", team: "Digital Storm", kda: "2.09", rating: 1.16, maps: 39 },
    { rank: 5, player: "IronFist", team: "Iron Legion", kda: "1.97", rating: 1.12, maps: 41 }
  ];

  const heroStats = [
    { hero: "Reaper", pickRate: "23.4%", winRate: "64.2%", banRate: "18.7%" },
    { hero: "Phantom", pickRate: "19.8%", winRate: "58.9%", banRate: "22.1%" },
    { hero: "Voidbringer", pickRate: "17.2%", winRate: "61.3%", banRate: "15.4%" },
    { hero: "Shadowweaver", pickRate: "15.6%", winRate: "55.7%", banRate: "28.9%" },
    { hero: "Nexus", pickRate: "14.3%", winRate: "52.4%", banRate: "12.8%" }
  ];

  return (
    <section className="stats-section">
      <div className="section-header">
        <h2 className="section-title">Statistics</h2>
        <div className="stats-tabs">
          <button 
            className={`tab ${activeStatsTab === 'players' ? 'active' : ''}`}
            onClick={() => setActiveStatsTab('players')}
          >
            Player Stats
          </button>
          <button 
            className={`tab ${activeStatsTab === 'heroes' ? 'active' : ''}`}
            onClick={() => setActiveStatsTab('heroes')}
          >
            Hero Stats
          </button>
        </div>
      </div>

      {activeStatsTab === 'players' && (
        <div className="player-stats">
          <div className="stats-table">
            <div className="table-header">
              <span>Rank</span>
              <span>Player</span>
              <span>Team</span>  
              <span>K/D/A</span>
              <span>Rating</span>
              <span>Maps</span>
            </div>
            {playerStats.map(player => (
              <div key={player.rank} className="stats-row">
                <span className="rank">{player.rank}</span>
                <span className="player-name">{player.player}</span>
                <span className="team-name">{player.team}</span>
                <span className="kda">{player.kda}</span>
                <span className="rating">{player.rating}</span>
                <span className="maps">{player.maps}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeStatsTab === 'heroes' && (
        <div className="hero-stats">
          <div className="stats-table">
            <div className="table-header">
              <span>Hero</span>
              <span>Pick Rate</span>
              <span>Win Rate</span>
              <span>Ban Rate</span>
            </div>
            {heroStats.map(hero => (
              <div key={hero.hero} className="stats-row">
                <span className="hero-name">{hero.hero}</span>
                <span className="pick-rate">{hero.pickRate}</span>
                <span className="win-rate">{hero.winRate}</span>
                <span className="ban-rate">{hero.banRate}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};