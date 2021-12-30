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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 80,
  },
  navigation: {
    display: 'flex',
  },
  navigationItem: {
    minWidth: 'fit-content',
  },
  navigationLink: {
    display: 'inline-block',
    color: colors.mineShaft,
    fontWeight: 400,
    marginLeft: 40,
    textDecoration: 'none',
  },
}))

export default useStyles