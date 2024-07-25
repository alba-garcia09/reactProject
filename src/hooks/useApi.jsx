import { useState, useEffect } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getData({ route }) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1ZXN0YUBhbGJhIiwiaWF0IjoxNzIxOTI3NTY5LCJleHAiOjE3MjIwMTM5Njl9.6Db7klzvABT_2vYEOlVRzTdShwixsiO9VoMwS7elZJo'
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
