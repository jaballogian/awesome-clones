// CONSTANTS
import { colors } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  // TODO: ADD STYLES FOR MD SCREEN
  root: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    padding: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
    // XS SCREEN
    [theme.breakpoints.only('xs')]: {
      padding: '100px 20px 120px',
      flexDirection: 'column',
    },
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      padding: '100px 40px 120px',
      flexDirection: 'column',
    },
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 100px',
    background: 'transparent',
    boxShadow: 'unset',
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      padding: 20,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'unset',
  },
  toggleIcon: {
    color: 'black',
    width: 30,
    height: 30,
    cursor: 'pointer',
    zIndex: 20,
    // XS AND SM SCREENS
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
    maxWidth: 80,
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      maxWidth: 60,
    },
  },
  navigation: {
    display: 'flex',
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navigationSmallScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    zIndex: 10,
  },
  navigationItem: {
    minWidth: 'fit-content',
    padding: 'unset',
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      width: 'fit-content',
      textAlign: 'center',
    },
  },
  navigationLink: {
    display: 'inline-block',
    color: colors.mineShaft,
    fontWeight: 400,
    marginLeft: 40,
    textDecoration: 'none',
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  navigationText: {
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
      margin: '5px 0px',
    },
  },
  textContainer: {
    position: 'relative',
    maxWidth: 600,
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  title: {
    fontSize: '4em',
    color: colors.mineShaft,
    lineHeight: 1.4,
    fontWeight: 500,
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5em',
      marginBottom: 15,
    },
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
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      justifyContent: 'center',
      paddingRight: 0,
      margin: '25px 0px',
    },
  },
  imageCoffee: {
    maxWidth: 340,
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      maxWidth: 250,
    },
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
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      maxHeight: 80,
    },
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
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      backgroundColor: colors.funGreen,
      right: 0,
      padding: 15,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
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
    transition: '0.5s ease-in-out',
    clipPath: 'circle(600px at right 800px)',
    // XS AND SM SCREENS
    [theme.breakpoints.down('md')]: {
      clipPath: 'circle(400px at center bottom)',
    },
  },
}))

export default useStyles