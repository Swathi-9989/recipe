import React, { useState, useEffect } from "react";
import axios from "axios";

function View() {
  const [books, setBooks] = useState([]); 
  const [query, setQuery] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${query}`
        );
        setBooks(response.data.docs.slice(0, 10)); // limit to 10 books
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [query]);

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="p-4">
      <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="border p-2 rounded w-full mb-4"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {books.map((book) => (
                <div key={book.key} className="bg-white shadow p-2 rounded">
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">
                    {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {book.first_publish_year || "N/A"}
                  </p>
                  <p>
                    {book.getCoverUrl}
                  </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;
