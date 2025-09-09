import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookForm from "./components/BookForm";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>📚 Library</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books/:id/edit" element={<BookForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;