import { useState } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getData({ route }) {
    setIsLoading(true);
      try {
        const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
          headers: {
            'Authorization': `${localStorage.token}`
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
  }

  return { data, getData, error, isLoading };
}

export default useApi;
