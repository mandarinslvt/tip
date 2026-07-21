import { NavLink } from "react-router-dom"
import React from 'react';
import { NavigationStats } from './../../types';

interface HeaderProps {
  stats: NavigationStats;
  currentTab: 'books' | 'readers';
  onTabChange?: (tab: 'books' | 'readers') => void;
}

export const Header: React.FC<HeaderProps> = ({ stats, currentTab, onTabChange }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span>Библиотека</span>
          </div>
          <nav className="nav">
            <a 
              href="#books" 
              className={currentTab === 'books' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onTabChange?.('books'); }}
            >
              📖 Книги
              <span className="nav-badge">{stats.booksCount}</span>
            </a>
            <a 
              href="#readers" 
              className={currentTab === 'readers' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onTabChange?.('readers'); }}
            >
              👤 Читатели
              <span className="nav-badge">{stats.readersCount}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};