// CONSTANTS
import { colors } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    padding: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 100px',
    background: 'transparent',
    boxShadow: 'unset',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'unset',
  },
  logo: {
    maxWidth: 80,
  },
  navigation: {
    display: 'flex',
  },
  navigationItem: {
    minWidth: 'fit-content',
    padding: 'unset',
  },
  navigationLink: {
    display: 'inline-block',
    color: colors.mineShaft,
    fontWeight: 400,
    marginLeft: 40,
    textDecoration: 'none',
  },
  textContainer: {
    position: 'relative',
    maxWidth: 600,
  },
  title: {
    fontSize: '4em',
    color: colors.mineShaft,
    lineHeight: 1.4,
    fontWeight: 500,
  },
  titleGreen: {
    color: colors.funGreen,
    fontSize: '1.2em',
    fontWeight: 900,
  },
  paragraph: {
    color: colors.mineShaft,
  },
  learnMore: {
    display: 'inline-block',
    marginTop: 20,
    padding: '8px 20px',
    backgroundColor: colors.funGreen,
    color: 'white',
    borderRadius: 40,
    fontWeight: 500,
    letterSpacing: 1,
    textDecoration: 'none',
  },
  imageContainer: {
    position: 'relative',
    width: 600,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 50,
    marginTop: 50,
  },
  imageCoffee: {
    maxWidth: 340,
  },
  coffeeOptionsRoot: {
    padding: 'unset',
    position: 'absolute',
    left: '50%',
    bottom: 20,
    transform: 'translateX(-50%)',
    display: 'flex',
  },
  coffeeOptionsItem: {
    padding: 'unset',
    listStyle: 'none',
    display: 'inline-block',
    margin: '0px 20px',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      transform: 'translateY(-15px)',
    },
  },
  coffeeOptionsImage: {
    maxHeight: 120,
  },
  socialMediasRoot: {
    padding: 'unset',
    position: 'absolute',
    top: '50%',
    right: 30,
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  socialMediasItem: {
    padding: 'unset',
    listStyle: 'none',
  },
  socialMediasIcon: {
    display: 'inline-block',
    margin: '10px 0px',
    fontSize: 36,
    color: 'black',
    filter: 'invert(1)',
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.funGreen,
    clipPath: 'circle(600px at right 800px)',
  },
}))

export default useStyles