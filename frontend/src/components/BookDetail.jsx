import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`books/${id}/`)
      .then((res) => setBook(res.data))
      .catch(() => alert("Failed to load book details."));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this book?")) return;
    await API.delete(`books/${id}/`);
    navigate("/");
  };

  if (!book) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Author:</span> {book.author}
        </p>
        <p>
          <span className="font-semibold">Published:</span>{" "}
          {book.published_date || "—"}
        </p>
        <p>
          <span className="font-semibold">ISBN:</span> {book.isbn}
        </p>
        <p>
          <span className="font-semibold">Summary:</span>{" "}
          {book.summary || "No summary"}
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          to={`/books/${book.id}/edit`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          🗑️ Delete
        </button>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          ⬅️ Back to list
        </Link>
      </div>
    </div>
  );
}