// CONSTANTS
import { colors } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.shark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationsList: {
    width: 400,
    height: 75,
    padding: '0px 25px',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  navigationItem: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 70,
    padding: 0,
  },
  navigationIcon: {
    position: 'relative',
    height: 75,
    transition: '0.5s ease-in-out',
    color: colors.shark,
  },
  navigationIconHovered: {
    transform: 'translateY(-35px)',
  },
  navigationText: {
    position: 'absolute',
    color: colors.shark,
    opacity: 0,
    bottom: 10,
    transition: '0.5s ease-in-out',
  },
  navigationTextHovered: {
    opacity: 1,
    transform: 'translateY(-15px)',
  },
}))

export default useStyles