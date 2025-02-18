import React, { useState } from "react";
import ArtistList from "./components/ArtistList";

const App = () => {
  const [artists, setArtists] = useState([
    { id: 1, name: "My Tam", description: "Da Nang" },
    { id: 2, name: "Ho Ngoc Ha", description: "Ho Chi Minh" },
    { id: 3, name: "Quang Hung MasterD", description: "Ha Noi" },
    { id: 4, name: "Son Tung MTP", description: "Thai Binh" },
    { id: 5, name: "Duc Phuc", description: "Ha Noi" },
    { id: 6, name: "Justin Bieber", description: "Canada" },
    { id: 7, name: "Do Doan Huy Hoang", description: "Da Nang" },
  ]);

  const addArtist = () => {
    const newArtist = { id: artists.length + 1, name: "New Artist", description: "Unknown" };
    setArtists([...artists, newArtist]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Music Player Components</h1>
      <button 
        onClick={addArtist} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
      >
        Thêm mới ca sĩ
      </button>
      <ArtistList artists={artists} />
    </div>
  );
};

export default App;
