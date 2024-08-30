import { useState, useEffect } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Función para transformar la URL
  const transformRowUrl = (rowUrl) => {
    const splitedRowUrl = rowUrl.split('/');
    const imgId = splitedRowUrl[5];
    const url = `https://drive.google.com/thumbnail?id=${imgId}&sz=w1000`;
    return url;
  };

  function getData({ route }) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const token = localStorage.token
        const response = await fetch(`https://backend-98l2.onrender.com/${route}`, {
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

        // Transformar las URLs de las imágenes antes de actualizar el estado
        const transformedData = responseAsJson.map(item => {
          if (item.image) {
            return {
              ...item,
              image: item.image.map(imgUrl => transformRowUrl(imgUrl))  // Aplicar la transformación a cada URL de imagen
            };
          }
          return item;
        });

        setData(transformedData);
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
