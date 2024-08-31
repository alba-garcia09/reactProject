import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';  // Import useLocation
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
  cursor: pointer;

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

const ProductsPage = () => {
  const { data, getData, isLoading, error } = useApi();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();  // To obtain the query string from the URL

  useEffect(() => {
    getData({ route: 'clothes/all' });
  }, []);

  // Check if there is a query string in the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const brand = queryParams.get('brand');
    if (brand) {
      setSelectedBrand(brand); // Set the selected brand based on the query string
    }
  }, [location.search]);
  // http://localhost:5173/products?brand=nike
  useEffect(() => {
    if (data) {
      let filtered = data;

      if (searchTerm) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedBrand) {
        filtered = filtered.filter(product =>
          product.brand === selectedBrand
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
  }, [data, searchTerm, selectedBrand, minPrice, maxPrice]);

  if (error) {
    return <Container><p>Error loading products: {error}</p></Container>;
  }

  if (isLoading) {
    return <Container><p>Loading products</p></Container>;
  }

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Create a list of unique brands
  const uniqueBrands = [...new Set(data?.map(product => product.brand))];

  return (
    <Container>
      <h1>Products</h1>
      <SearchBar
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FiltersContainer>
        <Filter
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </Filter>
        <PriceRangeContainer>
          <label>Min Price:</label>
          <PriceInput
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label>Max Price:</label>
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
            <ProductCard 
              key={product._id} 
              onClick={() => handleProductClick(product._id)}
            >
              <h2>{product.name}</h2>
              <ProductImage src={product.image[0]} alt={product.name} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Style: {product.style}</p>
              <p>Type: {product.type}</p>
              <p>Color: {product.color}</p>
            </ProductCard>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ProductGrid>
    </Container>
  );
};

export default ProductsPage;
