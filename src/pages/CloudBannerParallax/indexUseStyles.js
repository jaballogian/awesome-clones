// IMAGES
import ImageCastle from './assets/castle.jpg'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
  },
  topContainer: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${ImageCastle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontSize: '12em',
    textTransform: 'uppercase',
    fontWeight: 900,
  },
  cloudsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  itemCloud: {
    position: 'absolute',
    bottom: 0,
    maxWidth: '100%',
    animation: '$cloudAnimation calc(3s * var(--i)) linear infinite',
  },
  '@keyframes cloudAnimation': {
    '0%': {
      opacity: 0,
      transform: 'scale(1)',
    },
    '25%': {
      opacity: 1,
    },
    '75%': {
      opacity: 1,
    },
    '100%': {
      transform: 'scale(3)',
    },
  },
  bottomContainer: {},
  caption: {},
  paragraph: {},
}))

export default useStyles