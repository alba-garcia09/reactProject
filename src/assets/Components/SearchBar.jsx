import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
