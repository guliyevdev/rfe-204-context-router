import React, {useEffect, useState} from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useFavorites } from "../../context/FavoritesContext.tsx";
import axios from 'axios';

const Product: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });
  async function getProducts() {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  }
  const isFavorite = (product: { id: number; name: string; price: string }) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          extra={
            <Button
              type="link"
              icon={
                isFavorite(product) ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={() => toggleFavorite(product)}
            />
          }
          style={{ width: 350 }}
        >
          <img src={product.image} width="100%" />
          <p>Price: {product.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Product;
