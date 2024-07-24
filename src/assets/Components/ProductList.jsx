// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

const ProductList = ({ filters, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        if (!response.ok) throw new Error('Error al obtener los productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      filters.category ? product.category === filters.category : true
    )
    .filter(product =>
      filters.maxPrice ? product.price <= filters.maxPrice : true
    );

  return (
    <Container>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
