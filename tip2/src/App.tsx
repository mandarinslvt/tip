import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import { useState } from 'react';
import Header from './components/common/header';
import ReaderProfilePage from './pages/ReadersPage/ReadersPage'; 
import BookList from './components/books/BookList/BookList'; 
import type { IBook } from './types/books'; 
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<BookList books={mockBooks} />} />
          <Route path="/books/:id" element={<BookDetail />} />
          {/* Добавьте роуты для читателей и профиля */}
        </Routes>
      </main>
    </div>
  );
}