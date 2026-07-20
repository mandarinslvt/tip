import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import { useState } from 'react';
import Header from './components/common/header';
import ReaderProfilePage from './pages/ReadersPage/ReadersPage'; 
import BookList from './components/books/BookList/BookList'; 
import type { IBook } from './types/books'; 
import './App.css'; 

function App() {
  const [activePage, setActivePage] = useState<'books' | 'readers'>('books');

  //проверка
  const mockBooks: IBook[] = [
    { id: '1', title: 'Преступление и наказание', author: 'Ф. Достоевский' },
];

  return (
    <div className="app">
      {/* Подключаем вашу шапку */}
      <Header activePage={activePage} onPageChange={setActivePage} />
      
      <main className="container" style={{ paddingTop: '20px' }}>
        {activePage === 'books' ? (
          <BookList books={mockBooks} />
        ) : (
          <div className="readers-page">
            <h2>Список читателей</h2>
            
          </div>
        )}
      </main>
    </div>
  );
}
export default App;