import { useState, useEffect } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getData({ route }) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI5LzA3QGFsYmEiLCJpYXQiOjE3MjIyNjk2NjEsImV4cCI6MTcyMjM1NjA2MX0.x1duCZYQphIz5sqlRpgxTPXgcOUapTX5zBK4hLF13Wk'
        const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
          headers: {
            'Authorization': `${token}`
          }
        });
        if (!response.ok) {
          setError('Error al obtener los datos');
          setIsLoading(false);
          return;
        }
        const responseAsJson = await response.json();
        setData(responseAsJson);
        setIsLoading(false);
      } catch (err) {
        setError('Error al obtener los datos');
        setIsLoading(false);
      }
    }, 1000);
  }

  return { data, getData, error, isLoading };
}

export default useApi;
