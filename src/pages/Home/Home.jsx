import MobileSideBar from '../../components/MobileSideBar/MobileSideBar'

function Home() {
  return (
    <>
      <MobileSideBar animationTime={2000} asideWidth='20vw'>
        <ol>
          <li>Primero</li>
          <li>Segundo</li>
          <li>Tercero</li>
          <li>Cuarto</li>
        </ol>
      </MobileSideBar>
    </>
  )
}

export default Home
