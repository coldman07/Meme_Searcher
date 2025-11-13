import React, { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function load() {
    setLoading(true);
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      if (json.success) {
        setMemes(json.data.memes);
      } else {
        console.warn("API returned success: false");
        setMemes([]);
      }

    } catch (err) {
      console.error("Failed to load memes:", err);
      setMemes([]);
    } finally {
      setLoading(false);
    }
  }

  load();
}, []);


  const filtered = memes.filter(m =>
    m.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight">
          Meme Search Engine
        </h1>

        <div className="flex gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search memes..."
            className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => setQ("")}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700"
          >
            Clear
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-8">
        {loading ? (
          <div className="text-center text-gray-300">Loading memes…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((m) => (
              <MemeCard key={m.id} meme={m} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="mt-8 text-center text-gray-400">No memes found.</p>
        )}
      </main>
    </div>
  );
}
