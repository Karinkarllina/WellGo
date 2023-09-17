import { Circles } from 'react-loader-spinner'

const Spinner = () => {

    return (
        <Circles
  height="80"
  width="80"
  color="rgba(28, 2, 224, 0.845)"
  ariaLabel="circles-loading"
  wrapperStyle={{position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0, 
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'}}
  wrapperClass=""
  visible={true}
/>
    )
}

export default Spinner;