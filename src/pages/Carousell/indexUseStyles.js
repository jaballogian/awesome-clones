// CONSTANTS
import { boxShadows } from './constants'

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
    transition: '1s ease-in-out',
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
  carousellContainer: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    overflowX: 'hidden',
    borderRadius: 20,
    boxShadow: `0px 0px 20px ${boxShadows.softWhite}`,
  },
  carousellItemContainer: {
    zIndex: 1,
    height: '100%',
    width: 'calc(100vw - 200px)',
    display: 'flex',
    borderRadius: 20,
    transition: '1s ease-in-out',
  },
  carousellItem: {
    width: 'calc(100vw - 200px)',
    objectFit: 'cover',
  },
  radioGrop: {
    position: 'absolute',
    bottom: 25,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  radioButton: {
    color: 'white',
    '&.Mui-checked': {
      color: 'white',
    },
  },
}))

export default useStyles