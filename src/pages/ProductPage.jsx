import React, { useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const ProductPage = () => {
  const [filters, setFilters] = useState({ category: '', maxPrice: '' });
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterPanel filters={filters} setFilters={setFilters} />
      <ProductList filters={filters} searchTerm={searchTerm} />
    </Container>
  );
};

export default ProductPage;
