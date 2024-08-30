import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';

const Container = styled.div`
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Filter = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PriceInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;

const ProductsPage = () => {
  const { data, getData, isLoading, error } = useApi();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getData({ route: 'clothes/all' });
  }, []);

  useEffect(() => {
    if (data) {
      let filtered = data;

      if (searchTerm) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter(product =>
          product.type === selectedCategory
        );
      }

      if (minPrice) {
        filtered = filtered.filter(product =>
          product.price >= parseFloat(minPrice)
        );
      }

      if (maxPrice) {
        filtered = filtered.filter(product =>
          product.price <= parseFloat(maxPrice)
        );
      }

      setFilteredProducts(filtered);
    }
  }, [data, searchTerm, selectedCategory, minPrice, maxPrice]);

  if (error) {
    return <Container><p>Error al cargar los productos: {error}</p></Container>;
  }

  if (isLoading) {
    return <Container><p>Cargando productos</p></Container>;
  }

  return (
    <Container>
      <h1>Productos</h1>
      <SearchBar
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FiltersContainer>
        <Filter
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="category1">Categoría 1</option>
          <option value="category2">Categoría 2</option>
          {/* Añadir más categorias según tu necesidad */}
        </Filter>
        <PriceRangeContainer>
          <label>Precio Mín:</label>
          <PriceInput
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label>Precio Máx:</label>
          <PriceInput
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </PriceRangeContainer>
      </FiltersContainer>
      <ProductGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product._id}>
              <h2>{product.name}</h2>
              <ProductImage src={product.image[0]} alt={product.name} />
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Marca: {product.brand}</p>
              <p>Estilo: {product.style}</p>
              <p>Tipo: {product.type}</p>
              <p>Color: {product.color}</p>
            </ProductCard>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </ProductGrid>
    </Container>
  );
};

export default ProductsPage;
