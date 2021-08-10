// ** Logo
import logo from '@src/assets/images/logo/logo.png'
import loader from '@src/assets/images/logo/loader.gif'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100'>
      <img className='fallback-logo align-center' height='50' width='70' src={loader} alt='logo' />
      {/* <div className='loading'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div> */}
    </div>
  )
}

export default SpinnerComponent
