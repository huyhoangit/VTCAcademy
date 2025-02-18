import React from "react";

const ArtistItem = ({ artist }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-gray-100 transition">
      <div>
        <h2 className="text-red-500 text-lg font-semibold">{artist.name}</h2>
        <p className="text-gray-600 text-[20px]">{artist.description}</p>
      </div>
    </div>
  );
};

export default ArtistItem;
