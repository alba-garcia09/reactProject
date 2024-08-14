import { useState } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getToken = () => localStorage.getItem('token');
  const setToken = (token) => localStorage.setItem('token', token);
  const clearToken = () => localStorage.removeItem('token');

  async function getData({ route }) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const responseAsJson = await response.json();
      setData(responseAsJson);
    } catch (err) {
      setError(err.message || 'Error al obtener los datos');
    } finally {
      setIsLoading(false);
    }
  }

  async function postData({ route, body, requiresAuth = false }) {
    setIsLoading(true);
    setError(null);
    const headers = {
      'Content-Type': 'application/json'
    };

    if (requiresAuth) {
      headers['Authorization'] = `Bearer ${getToken()}`;
    }

    try {
      const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Error al realizar la solicitud');
      }

      const responseAsJson = await response.json();
      if (responseAsJson.token) {
        setToken(responseAsJson.token);
      }

      return responseAsJson;
    } catch (err) {
      setError(err.message || 'Error al realizar la solicitud');
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { data, getData, postData, error, isLoading, clearToken };
}

export default useApi;
