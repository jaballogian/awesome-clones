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
    background: 'white',
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
}))

export default useStyles