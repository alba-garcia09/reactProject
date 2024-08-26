import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/whiteLogo.png';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 50px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const MyLogo = styled.img`
  height: 100%;
  width: auto;
`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px 15px 5px 15px;
  border-radius: 30px;
  width: 80%;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchIcon = styled.i`
  margin-left: 15px;
  font-size: 150%;
  cursor: pointer;
`;

const IconColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  gap: 15px;
`;

const Icon = styled.div`
  font-size: 180%;
  cursor: pointer;
  &:hover {
    color: var(--secundaryColor);
  }
`;

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const theProducts = ['jeans', 'nike', 't-shirt', 'skirt', 'cap','shirt', 'bershka', 'mustang'];

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(
      setTimeout(() => {
        if (search) {
          const filteredSuggestions = theProducts.filter(product =>
            product.toLowerCase().startsWith(search.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } else {
          setSuggestions([]);
        }
      }, 1000)
    );
  }, [search]);

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
    navigate(`/filter/${suggestion}`);
  };

  return (
    <HeaderContainer>
      <Column className="col-md-3 col-sm-5">
        <MyLogo src={Logo} alt="Logo" />
      </Column>

      <Column className="col-md-6 d-none d-md-flex">
        <SearchInput>
          <input
            type="text"
            placeholder="What do you want"
            className="form-control"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SearchIcon
            className="bi bi-search"
            style={{ color: "black" }}
            onClick={() => navigate(`/filter/${search}`)}
          />
          {suggestions.length > 0 && (
            <SuggestionsList>
              {suggestions.map((suggestion, index) => (
                <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </SearchInput>
      </Column>

      <Column className="d-md-none col-sm-2">
        <SearchIcon className="bi bi-search" style={{ color: "white" }} />
      </Column>

      <Column className="col-md-3 col-sm-5">
        <IconColumn>
          <Icon className="bi bi-person" onClick={() => navigate('/login')} />
          <Icon className="bi bi-cart" onClick={() => navigate('/cart')} />
        </IconColumn>
      </Column>
    </HeaderContainer>
  );
}

export default Header;
