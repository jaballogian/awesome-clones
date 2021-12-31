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
    position: 'relative',
    objectFit: 'cover',
    transition: '1s ease-in-out',
    padding: 100,
    [theme.breakpoints.only('xs')]: {
      padding: 50,
    },
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
    display: 'flex',
    borderRadius: 20,
    transition: '1s ease-in-out',
  },
  carousellItem: {
    objectFit: 'cover',
    width: 'calc(100vw - 200px)',
    [theme.breakpoints.only('xs')]: {
      width: 'calc(100vw - 100px)',
    },
  },
  radioGrop: {
    position: 'absolute',
    bottom: 25,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    width: 'fit-content',
    [theme.breakpoints.only('xs')]: {
      bottom: 5,
    },
  },
  radioFormControlLabel: {
    margin: 0,
  },
  radioButton: {
    color: 'white',
    '&.Mui-checked': {
      color: 'white',
    },
  },
}))

export default useStyles