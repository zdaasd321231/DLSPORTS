import React, { useState } from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-container">
            <div className="deadlock-logo">
              <svg width="50" height="50" viewBox="0 0 50 50" className="logo-svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6c5ce7" />
                    <stop offset="50%" stopColor="#fd79a8" />
                    <stop offset="100%" stopColor="#a29bfe" />
                  </linearGradient>
                </defs>
                <circle cx="25" cy="25" r="23" fill="url(#logoGradient)" stroke="#ffffff" strokeWidth="2"/>
                <polygon points="15,15 35,15 40,25 35,35 15,35 10,25" fill="#ffffff" opacity="0.9"/>
                <circle cx="25" cy="25" r="8" fill="url(#logoGradient)"/>
                <circle cx="25" cy="25" r="4" fill="#ffffff"/>
              </svg>
            </div>
            <div className="logo-text">
              <h1 className="logo">DL<span className="logo-accent">SPORTS</span></h1>
              <span className="tagline">Киберспорт портал</span>
            </div>
          </div>
        </div>
        <nav className="main-nav">
          <a href="#matches" className="nav-link">
            <span className="nav-icon">⚔️</span>
            Матчи
          </a>
          <a href="#results" className="nav-link">
            <span className="nav-icon">🏆</span>
            Результаты
          </a>
          <a href="#rankings" className="nav-link">
            <span className="nav-icon">📊</span>
            Рейтинги
          </a>
          <a href="#news" className="nav-link">
            <span className="nav-icon">📰</span>
            Новости
          </a>
          <a href="#stats" className="nav-link">
            <span className="nav-icon">📈</span>
            Статистика
          </a>
        </nav>
        <div className="header-actions">
          <button className="live-indicator">
            <span className="live-pulse"></span>
            ПРЯМОЙ ЭФИР
          </button>
          <div className="user-menu">
            <div className="user-avatar">👤</div>
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
        <h3 className="sidebar-title">Навигация</h3>
        <ul className="sidebar-menu">
          <li className={`sidebar-item ${activeSection === 'matches' ? 'active' : ''}`} 
              onClick={() => setActiveSection('matches')}>
            <span className="sidebar-icon">⚔️</span>
            <span>Матчи</span>
            <span className="sidebar-arrow">→</span>
          </li>
          <li className={`sidebar-item ${activeSection === 'rankings' ? 'active' : ''}`} 
              onClick={() => setActiveSection('rankings')}>
            <span className="sidebar-icon">🏆</span>
            <span>Рейтинги</span>
            <span className="sidebar-arrow">→</span>
          </li>
          <li className={`sidebar-item ${activeSection === 'news' ? 'active' : ''}`} 
              onClick={() => setActiveSection('news')}>
            <span className="sidebar-icon">📰</span>
            <span>Новости</span>
            <span className="sidebar-arrow">→</span>
          </li>
          <li className={`sidebar-item ${activeSection === 'stats' ? 'active' : ''}`} 
              onClick={() => setActiveSection('stats')}>
            <span className="sidebar-icon">📊</span>
            <span>Статистика</span>
            <span className="sidebar-arrow">→</span>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-title">Активные турниры</h3>
        <div className="tournament-card">
          <div className="tournament-status">LIVE</div>
          <h4>Чемпионат мира DL</h4>
          <p className="tournament-date">15-18 декабря 2024</p>
          <div className="tournament-prize">$2,500,000</div>
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Топ команды</h3>
        <div className="mini-rankings">
          <div className="mini-rank-item">
            <span className="rank-badge">1</span>
            <div className="team-info">
              <span className="team-name">Phantom Collective</span>
              <span className="team-rating">2847</span>
            </div>
          </div>
          <div className="mini-rank-item">
            <span className="rank-badge">2</span>
            <div className="team-info">
              <span className="team-name">Nexus Gaming</span>
              <span className="team-rating">2823</span>
            </div>
          </div>
          <div className="mini-rank-item">
            <span className="rank-badge">3</span>
            <div className="team-info">
              <span className="team-name">Void Runners</span>
              <span className="team-rating">2798</span>
            </div>
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
      <div className="hero-animated-bg">
        <div className="floating-particles"></div>
        <div className="animated-grid"></div>
        <div className="neon-circles">
          <div className="neon-circle circle1"></div>
          <div className="neon-circle circle2"></div>
          <div className="neon-circle circle3"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🎮</span>
          <span className="badge-text">DEADLOCK ESPORTS</span>
          <div className="badge-glow"></div>
        </div>
        <h1 className="hero-title">
          <span className="title-line">Лучший портал</span>
          <span className="hero-accent animated-text"> киберспорта </span>
          <span className="title-line">по Deadlock</span>
        </h1>
        <p className="hero-subtitle">
          Прямые трансляции матчей, освещение турниров, статистика игроков и последние новости из мира киберспорта Deadlock
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">
            <span>Смотреть матчи</span>
            <div className="btn-effect"></div>
          </button>
          <button className="hero-btn secondary">
            <span>Турниры</span>
            <div className="btn-outline-effect"></div>
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-card animated-card">
            <div className="stat-number counter" data-target="156">0</div>
            <div className="stat-label">Матчей сегодня</div>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-card animated-card">
            <div className="stat-number counter" data-target="2.4">0</div>
            <div className="stat-label">Активных игроков (M)</div>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-card animated-card">
            <div className="stat-number">$500K</div>
            <div className="stat-label">Призовой фонд</div>
            <div className="stat-glow"></div>
          </div>
        </div>
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
      viewers: "45.2K",
      map: "Urban Warfare"
    },
    { 
      id: 2, 
      team1: "Void Runners", 
      team2: "Iron Legion", 
      score: "1-1", 
      status: "LIVE",
      tournament: "Pro League",
      viewers: "23.8K",
      map: "Neon District"
    },
    { 
      id: 3, 
      team1: "Digital Storm", 
      team2: "Crimson Guard", 
      score: "0-2", 
      status: "LIVE",
      tournament: "Regional Cup",
      viewers: "18.5K",
      map: "Shadow Complex"
    }
  ];

  return (
    <section className="live-matches">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">🔴</span>
          Прямые трансляции
        </h2>
        <button className="view-all-btn">Все матчи</button>
      </div>
      
      <div className="matches-grid">
        {liveMatches.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-status-bar">
              <span className="match-tournament">{match.tournament}</span>
              <span className="match-viewers">👁️ {match.viewers}</span>
            </div>
            
            <div className="match-teams">
              <div className="team">
                <div className="team-avatar">🛡️</div>
                <span className="team-name">{match.team1}</span>
              </div>
              
              <div className="match-center">
                <div className="match-score">{match.score}</div>
                <div className="match-vs">VS</div>
                <div className="live-pulse-indicator">LIVE</div>
              </div>
              
              <div className="team">
                <div className="team-avatar">⚔️</div>
                <span className="team-name">{match.team2}</span>
              </div>
            </div>
            
            <div className="match-info">
              <div className="match-map">📍 {match.map}</div>
              <div className="match-time">⏱️ 45:32</div>
            </div>
            
            <div className="match-actions">
              <button className="action-btn watch">Смотреть</button>
              <button className="action-btn stats">Статистика</button>
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
      date: "Сегодня",
      team1: "Shadow Operatives",
      team2: "Lightning Squad",
      tournament: "Deadlock Major",
      bo: "BO3",
      map: "Cyber Arena"
    },
    {
      id: 2,
      time: "20:30",
      date: "Сегодня", 
      team1: "Cyber Knights",
      team2: "Neon Wolves",
      tournament: "Pro Circuit",
      bo: "BO5",
      map: "Neo Tokyo"
    },
    {
      id: 3,
      time: "14:00",
      date: "Завтра",
      team1: "Quantum Raiders",
      team2: "Steel Titans",
      tournament: "Regional Cup",
      bo: "BO3",
      map: "Industrial Zone"
    }
  ];

  const recentResults = [
    {
      id: 1,
      team1: "Phantom Collective",
      team2: "Nexus Gaming", 
      score: "3-1",
      tournament: "DWC 2024",
      date: "2 часа назад",
      winner: "team1"
    },
    {
      id: 2,
      team1: "Void Runners",
      team2: "Digital Storm",
      score: "2-0", 
      tournament: "Pro League",
      date: "5 часов назад",
      winner: "team1"
    },
    {
      id: 3,
      team1: "Iron Legion",
      team2: "Crimson Guard",
      score: "1-2",
      tournament: "Regional Cup", 
      date: "1 день назад",
      winner: "team2"
    }
  ];

  return (
    <section className="matches-section">
      <div className="section-tabs">
        <button 
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          <span className="tab-icon">⏰</span>
          Предстоящие матчи
        </button>
        <button 
          className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          <span className="tab-icon">✅</span>
          Результаты
        </button>
      </div>

      {activeTab === 'upcoming' && (
        <div className="content-list">
          {upcomingMatches.map(match => (
            <div key={match.id} className="content-item upcoming-match">
              <div className="match-timeline">
                <div className="match-time">{match.time}</div>
                <div className="match-date">{match.date}</div>
              </div>
              
              <div className="match-details">
                <div className="match-teams-simple">
                  <span className="team">{match.team1}</span>
                  <span className="vs-text">против</span>
                  <span className="team">{match.team2}</span>
                </div>
                <div className="match-meta">
                  <span className="tournament-badge">{match.tournament}</span>
                  <span className="format-badge">{match.bo}</span>
                  <span className="map-info">📍 {match.map}</span>
                </div>
              </div>
              
              <div className="match-actions-simple">
                <button className="preview-btn">Превью</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'results' && (
        <div className="content-list">
          {recentResults.map(result => (
            <div key={result.id} className="content-item result-match">
              <div className="result-teams">
                <span className={`team ${result.winner === 'team1' ? 'winner' : ''}`}>
                  {result.team1}
                </span>
                <div className="result-score">{result.score}</div>
                <span className={`team ${result.winner === 'team2' ? 'winner' : ''}`}>
                  {result.team2}
                </span>
              </div>
              
              <div className="result-meta">
                <span className="tournament-info">{result.tournament}</span>
                <span className="result-time">{result.date}</span>
              </div>
              
              <div className="result-actions">
                <button className="details-btn">Подробности</button>
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
    { rank: 1, team: "Phantom Collective", rating: 2847, change: "+2", logo: "🛡️" },
    { rank: 2, team: "Nexus Gaming", rating: 2823, change: "0", logo: "⚡" },
    { rank: 3, team: "Void Runners", rating: 2798, change: "+1", logo: "🌌" },
    { rank: 4, team: "Digital Storm", rating: 2776, change: "-2", logo: "⚔️" },
    { rank: 5, team: "Iron Legion", rating: 2751, change: "+3", logo: "🗡️" },
    { rank: 6, team: "Crimson Guard", rating: 2734, change: "-1", logo: "🔥" },
    { rank: 7, team: "Shadow Operatives", rating: 2712, change: "+1", logo: "👥" },
    { rank: 8, team: "Lightning Squad", rating: 2695, change: "-1", logo: "⚡" },
    { rank: 9, team: "Cyber Knights", rating: 2678, change: "+2", logo: "🤖" },
    { rank: 10, team: "Neon Wolves", rating: 2656, change: "0", logo: "🐺" }
  ];

  return (
    <section className="rankings-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">🏆</span>
          Рейтинги команд
        </h2>
        <div className="ranking-info">
          <span>Обновлено: 2 часа назад</span>
        </div>
      </div>

      <div className="rankings-container">
        {teamRankings.map(team => (
          <div key={team.rank} className="ranking-card">
            <div className="rank-position">
              <span className="rank-number">{team.rank}</span>
            </div>
            
            <div className="team-avatar-large">{team.logo}</div>
            
            <div className="team-details">
              <h3 className="team-name">{team.team}</h3>
              <div className="team-rating">{team.rating} очков</div>
            </div>
            
            <div className="rank-change">
              <span className={`change-indicator ${team.change.includes('+') ? 'up' : team.change.includes('-') ? 'down' : 'same'}`}>
                {team.change}
              </span>
            </div>
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
      title: "Phantom Collective доминирует в полуфинале Чемпионата мира по Deadlock",
      summary: "В потрясающем проявлении тактического мастерства, Phantom Collective обеспечили себе место в финале...",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236c5ce7'/%3E%3Cstop offset='100%25' stop-color='%23fd79a8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23bg1)'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3ETournament%3C/text%3E%3C/svg%3E",
      category: "Турнир",
      time: "2 часа назад",
      author: "Алекс Чен",
      views: "12.4K"
    },
    {
      id: 2,
      title: "Новый герой 'Shadowweaver' анонсирован для киберспорта",
      summary: "Valve представляет последнее пополнение в ростере Deadlock, привносящее уникальную механику скрытности...",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a29bfe'/%3E%3Cstop offset='100%25' stop-color='%236c5ce7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23bg2)'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='white' font-size='18' font-family='Arial'%3EGame Update%3C/text%3E%3C/svg%3E",
      category: "Игровые обновления",
      time: "6 часов назад", 
      author: "Сара Ким",
      views: "8.7K"
    },
    {
      id: 3,
      title: "Крупные изменения баланса затрагивают профессиональную сцену",
      summary: "Последний патч вносит значительные корректировки в основные игровые механики, влияя на про-стратегии...",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fdcb6e'/%3E%3Cstop offset='100%25' stop-color='%23fd79a8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23bg3)'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EAnalysis%3C/text%3E%3C/svg%3E",
      category: "Анализ",
      time: "1 день назад",
      author: "Маркус Родригес",
      views: "15.2K"
    },
    {
      id: 4,
      title: "Интервью: Капитан Nexus Gaming обсуждает стратегию чемпионата",
      summary: "Эксклюзивная беседа с капитаном команды раскрывает тактики подготовки к предстоящим матчам...",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='bg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300b894'/%3E%3Cstop offset='100%25' stop-color='%236c5ce7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23bg4)'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='white' font-size='18' font-family='Arial'%3EInterview%3C/text%3E%3C/svg%3E",
      category: "Интервью", 
      time: "1 день назад",
      author: "Дженнифер Ли",
      views: "9.8K"
    }
  ];

  return (
    <section className="news-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">📰</span>
          Последние новости
        </h2>
        <div className="news-filters">
          <button className="filter-chip active">Все</button>
          <button className="filter-chip">Турниры</button>
          <button className="filter-chip">Обновления</button>
          <button className="filter-chip">Интервью</button>
        </div>
      </div>

      <div className="news-grid">
        {newsArticles.map(article => (
          <article key={article.id} className="news-card">
            <div className="news-image-container">
              <img src={article.image} alt={article.title} className="news-image" />
              <div className="news-overlay">
                <span className="news-category-tag">{article.category}</span>
                <div className="news-views">👁️ {article.views}</div>
              </div>
            </div>
            
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              
              <div className="news-footer">
                <div className="author-info">
                  <span className="author-avatar">👤</span>
                  <span className="author-name">{article.author}</span>
                </div>
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
    { rank: 1, player: "ShadowMaster", team: "Phantom Collective", kda: "2.43", rating: 1.28, maps: 47, avatar: "🥇" },
    { rank: 2, player: "NexusKing", team: "Nexus Gaming", kda: "2.31", rating: 1.24, maps: 52, avatar: "🥈" },
    { rank: 3, player: "VoidWalker", team: "Void Runners", kda: "2.18", rating: 1.19, maps: 43, avatar: "🥉" },
    { rank: 4, player: "DigitalGhost", team: "Digital Storm", kda: "2.09", rating: 1.16, maps: 39, avatar: "👻" },
    { rank: 5, player: "IronFist", team: "Iron Legion", kda: "1.97", rating: 1.12, maps: 41, avatar: "✊" }
  ];

  const heroStats = [
    { hero: "Reaper", pickRate: "23.4%", winRate: "64.2%", banRate: "18.7%", avatar: "💀" },
    { hero: "Phantom", pickRate: "19.8%", winRate: "58.9%", banRate: "22.1%", avatar: "👻" },
    { hero: "Voidbringer", pickRate: "17.2%", winRate: "61.3%", banRate: "15.4%", avatar: "🌌" },
    { hero: "Shadowweaver", pickRate: "15.6%", winRate: "55.7%", banRate: "28.9%", avatar: "🕷️" },
    { hero: "Nexus", pickRate: "14.3%", winRate: "52.4%", banRate: "12.8%", avatar: "⚡" }
  ];

  return (
    <section className="stats-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">📊</span>
          Статистика
        </h2>
        <div className="stats-tabs">
          <button 
            className={`tab-btn ${activeStatsTab === 'players' ? 'active' : ''}`}
            onClick={() => setActiveStatsTab('players')}
          >
            <span className="tab-icon">👥</span>
            Игроки
          </button>
          <button 
            className={`tab-btn ${activeStatsTab === 'heroes' ? 'active' : ''}`}
            onClick={() => setActiveStatsTab('heroes')}
          >
            <span className="tab-icon">🦸</span>
            Герои
          </button>
        </div>
      </div>

      {activeStatsTab === 'players' && (
        <div className="stats-grid">
          {playerStats.map(player => (
            <div key={player.rank} className="stat-card">
              <div className="stat-header">
                <div className="player-avatar">{player.avatar}</div>
                <div className="player-info">
                  <h3 className="player-name">{player.player}</h3>
                  <span className="team-name">{player.team}</span>
                </div>
                <div className="player-rank">#{player.rank}</div>
              </div>
              
              <div className="stat-metrics">
                <div className="metric">
                  <span className="metric-label">K/D/A</span>
                  <span className="metric-value">{player.kda}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Рейтинг</span>
                  <span className="metric-value">{player.rating}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Карт</span>
                  <span className="metric-value">{player.maps}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeStatsTab === 'heroes' && (
        <div className="stats-grid">
          {heroStats.map(hero => (
            <div key={hero.hero} className="stat-card">
              <div className="stat-header">
                <div className="hero-avatar">{hero.avatar}</div>
                <div className="hero-info">
                  <h3 className="hero-name">{hero.hero}</h3>
                </div>
              </div>
              
              <div className="stat-metrics">
                <div className="metric">
                  <span className="metric-label">Пик</span>
                  <span className="metric-value">{hero.pickRate}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Винрейт</span>
                  <span className="metric-value">{hero.winRate}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Баны</span>
                  <span className="metric-value">{hero.banRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};