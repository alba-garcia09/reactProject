import Loading from '../../components/Loading/Loading'
import Logo from '../../components/Logo/Logo'

function Home() {
  return(
    <>
      <Loading>
        <Logo/>
      </Loading>

      <Loading $id={'firstLoading'} $pulse={true}>
        <Logo/>
      </Loading>

      <Loading $id={'secondLoading'} $rotation={true} $primaryColor='#bf21a5'>
        <Logo/>
      </Loading>

      <Loading $id={'thirdLoading'} $rotation={true} $pulse={true}>
        <Logo/>
      </Loading>

      <Loading $id={'yellowGreenLoading'} $rotation={true} $pulse={true} $primaryColor='#aabf21' $secondaryColor='#199b19'>
        <Logo/>
      </Loading>

      <Loading $id={'pinkPurpleLoading'}  $rotation={true} $pulse={true} $primaryColor='#bf21a5' $secondaryColor='#78076d'>
        <Logo/>
      </Loading>
    </>
  )
}

export default Home
