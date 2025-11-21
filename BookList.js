import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/books').then(res => setBooks(res.data));
  }, []);
  return (
    <div className="container mt-4">
      <h2>Library Books</h2>
      <table className="table">
        <thead><tr><th>Title</th><th>Author</th><th>Genre</th><th>Available</th></tr></thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}><td>{book.title}</td><td>{book.author}</td>
            <td>{book.genre}</td><td>{book.available ? "Yes" : "No"}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookList;
