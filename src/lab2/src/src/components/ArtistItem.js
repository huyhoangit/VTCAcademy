import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ArtistItem = ({ artist }) => (
  <Card
    hoverable
    className="w-60 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
  >
    <div className="relative w-full h-48">
      <img
        alt={artist.name}
        src={artist.image}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
    <Meta title={artist.name} description={artist.description} />
  </Card>
);

export default ArtistItem;
