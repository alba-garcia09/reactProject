// src/components/FilterPanel.jsx
import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Panel>
      <h4>Filtros</h4>
      <div>
        <label>
          Categoría:
          <select name="category" onChange={handleFilterChange} value={filters.category}>
            <option value="">Todas</option>
            <option value="electronics">Electrónica</option>
            <option value="clothing">Ropa</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Precio Máximo:
          <input
            type="number"
            name="maxPrice"
            onChange={handleFilterChange}
            value={filters.maxPrice}
          />
        </label>
      </div>
    </Panel>
  );
};

export default FilterPanel;
