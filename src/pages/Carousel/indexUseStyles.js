// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 100,
    position: 'relative',
    objectFit: 'cover',
    backgroundPosition: 'center',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      objectFit: 'cover',
      backgroundPosition: 'center',
      backdropFilter: 'blur(5px)',
    },
  },
  selectedImage: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    objectFit: 'cover',
    borderRadius: 20,
    boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
  },
  radioGrop: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  radioButton: {
    color: 'white',
    '&.Mui-checked': {
      color: 'white',
    },
  },
}))

export default useStyles