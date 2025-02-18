import React from "react";
import ArtistItem from "./ArtistItem";

const ArtistList = ({ artists }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistList;
