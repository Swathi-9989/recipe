import React, { useState } from "react";
import SearchBooks from "../components/View";

function App() {
  const [query, setQuery] = useState("harry potter"); // default search
  const [searchTerm, setSearchTerm] = useState("harry potter");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-6">📚 Book Finder</h1>

      <form
        onSubmit={handleSearch}
        className="flex justify-center gap-2 mb-6"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter book title..."
          className="border border-gray-300 rounded p-2 w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <SearchBooks query={query} />
    </div>
  );
}

export default App;
