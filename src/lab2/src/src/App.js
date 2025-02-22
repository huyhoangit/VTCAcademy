import React, { useState } from 'react';
import ArtistCard from './components/ArtistItem';

const App = () => {
  const [artists, setArtists] = useState([
    { id: 1, name: 'My Tam', description: 'Da Nang', image: 'https://th.bing.com/th/id/OIP.n_Pfl2tIAF2I6wFdE9MECgHaG6?w=209&h=195&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
    { id: 2, name: 'Ho Ngoc Ha', description: 'Ho Chi Minh', image: 'https://th.bing.com/th/id/OIP.gDYgYcElrXpPYg2ieH4wgwHaLG?w=184&h=276&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
    { id: 3, name: 'Quang Hung MasterD', description: 'Ha Noi', image: 'https://th.bing.com/th/id/OIP.teA1_y3G1thjNXvm335-ZgHaLH?w=184&h=277&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
    { id: 4, name: 'Son Tung MTP', description: 'Thai Binh', image: 'https://th.bing.com/th/id/OIP.3rIyHY5BsGwmP5emQxx6owHaI7?w=148&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
    { id: 5, name: 'Duc Phuc', description: 'Ha Noi', image: 'https://th.bing.com/th/id/OIP.e8zS0tFBNSFgJuATDS94jwHaHa?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Rack', description: 'Ben Tre', image: 'https://th.bing.com/th/id/OIP.l2e2w6SdNlMioElJNrJ9CAHaGe?w=206&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
    { id: 7, name: 'Do Doan Huy Hoang', description: 'Da Nang', image: 'https://th.bing.com/th/id/OIP.XhqZT6lTG-ORyVSJj6dUYgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.8&pid=1.7' },
  ]);

  const addArtist = () => {
    const newArtist = { id: artists.length + 1, name: 'New Artist', description: 'Unknown', image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' };
    setArtists([...artists, newArtist]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Music Player Components</h1>
      <button
        onClick={addArtist}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
      >
        Thêm mới ca sĩ
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {artists.map(artist => (
          <div key={artist.id} className="flex justify-center">
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
