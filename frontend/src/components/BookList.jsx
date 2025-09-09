import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await API.get("books/");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load books.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="w-full mt-10 bg-gray-900 text-gray-100 shadow-lg rounded-xl p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📚 Books</h2>
        <Link
          to="/books/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ➕ Add New Book
        </Link>
      </div>

      {books.length === 0 ? (
        <p className="text-gray-400">No books available. Add one!</p>
      ) : (
        <ul className="divide-y divide-gray-700">
          {books.map((b) => (
            <li key={b.id} className="py-3">
              <Link
                to={`/books/${b.id}`}
                className="block text-lg text-blue-400 hover:text-blue-300 transition"
              >
                {b.title} <span className="text-gray-400">— {b.author}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
