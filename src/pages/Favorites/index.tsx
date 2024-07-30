import { Card } from 'antd';
import { useFavorites } from '../../context/FavoritesContext.tsx';
import React from "react";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {favorites.map((product) => (
          <Card
              key={product.id}
              title={product.title}
              style={{width: 320}}
          >
            <img src={product.image} width="100%"/>
            <p>Price: {product.price}</p>
          </Card>
      ))}
    </div>
  );
};

export default Favorites;
