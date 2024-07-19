import useApi from '../../hooks/useAPI'

function UseApi() {
  const firstApiHook = useApi({ name: { common: 'Not countries yet' } })
  const secondApiHook = useApi({ name: { common: 'Not countries yet' } })

  return (
    <>
      <div>Primer pais: { firstApiHook.country.name.common } </div>
      <button onClick={ () => firstApiHook.getData({ route: '/all' }) }>Obtener paises</button>
      <button onClick={ firstApiHook.nextCountry }>Obtener siguiente pais</button>
      {firstApiHook.error && <p>{`Error: ${firstApiHook.error}`}</p>}

      <br /><br /><br />

      {
        secondApiHook.isLoading
      ?
        <div>Is Loading...</div>
      :
        <div>Primer pais: { secondApiHook.country.name.common } </div>
      }

      <button onClick={ () => secondApiHook.getData({ route: '/all' }) }>Obtener paises</button>
      <button onClick={ secondApiHook.nextCountry }>Obtener siguiente pais</button>
      {secondApiHook.error && <p>{`Error: ${secondApiHook.error}`}</p>}
    </>
  )
}

export default UseApi