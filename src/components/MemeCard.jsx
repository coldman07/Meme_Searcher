import React from "react";

export default function MemeCard({ meme }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold truncate">{meme.name}</h3>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <span>{meme.box_count} boxes</span>
          <a
            className="underline"
            href={meme.url}
            target="_blank"
            rel="noreferrer"
          >
            open
          </a>
        </div>
      </div>
    </div>
  );
}
