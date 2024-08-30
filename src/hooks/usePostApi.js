import { useState } from 'react';

function usePostApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function postData({ route, payload }) {
    setIsLoading(true);
    try {
      // const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
      const response = await fetch(`https://backend-irby.onrender.com/${route}`, {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setError('Error al enviar los datos');
        setIsLoading(false);
        return;
      }

      const responseAsJson = await response.json();
      setData(responseAsJson);
      setIsLoading(false);
    } catch (err) {
      setError('Error al enviar los datos');
      setIsLoading(false);
    }
  }

  return { data, postData, error, isLoading };
}

export default usePostApi;