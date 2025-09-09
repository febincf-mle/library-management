import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

export default function BookForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const [form, setForm] = useState({
    title: "",
    author: "",
    published_date: "",
    isbn: "",
    summary: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      API.get(`books/${id}/`).then((res) => setForm(res.data));
    }
  }, [id, isEdit]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await API.put(`books/${id}/`, form);
      } else {
        await API.post("books/", form);
      }
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to save book.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-xl p-6 mt-10 text-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Book" : "Add Book"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Author
          </label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Published Date
          </label>
          <input
            type="date"
            name="published_date"
            value={form.published_date || ""}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            ISBN
          </label>
          <input
            name="isbn"
            value={form.isbn}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Summary
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
        >
          {isEdit ? "💾 Save" : "➕ Create"}
        </button>
      </form>
    </div>
  );
}
