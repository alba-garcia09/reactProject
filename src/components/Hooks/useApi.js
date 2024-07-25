import { useState, useEffect } from 'react'

function useApi(defaultValue) {
  const [ countries, setCountries ] = useState([defaultValue])
  const [ country, setCountry ] = useState(defaultValue)
  const [ countryIndex, setCountryIndex ] = useState(0)
  const [ error, setError ] = useState()
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    setCountry(countries[countryIndex])
  }, [countryIndex])

  function getData({ route }) {
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1${route}`)
        console.log(response.ok);
        if (!response.ok) {
          setError('Error al obtener los paises')
          setIsLoading(false)
          return;
        }

        const responseAsJson = await response.json()
        setCountries(responseAsJson)
        setCountry(responseAsJson[0])
        setIsLoading(false)
      } catch(err) {
        setError('Error al obtener los paises')
        setIsLoading(false)
      }
    }, 3000)
  }

  function nextCountry() {
    setIsLoading(true)
    setTimeout(() => {
      setCountryIndex(countryIndex + 1)
      setIsLoading(false)
    }, 3000)
  }

  return { country, getData, nextCountry, error, isLoading }
}

export default useApi