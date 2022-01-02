// IMAGES
import ImageCastle from './assets/castle.jpg'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
  bottomContainer: {
    padding: 100,
    // XS SCREEN
    [theme.breakpoints.only('xs')]: {
      padding: 25,
    },
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      padding: 50,
    },
  },
  caption: {
    marginBottom: 20,
    fontWeight: 600,
  },
  paragraph: {
    textAlign: 'justify',
  },
}))

export default useStyles