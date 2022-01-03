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
    width: 340,
    height: 60,
    padding: '0px 20px',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
  },
  selectedItem: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: colors.springGreen,
    top: '-50%',
    borderRadius: '50%',
    border: `6px solid ${colors.shark}`,
    transition: '0.5s ease-in-out',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: -22,
      width: 20,
      height: 20,
      borderTopRightRadius: 20,
      boxShadow: `1px -10px 0px 0px ${colors.shark}`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      right: -22,
      width: 20,
      height: 20,
      borderTopLeftRadius: 20,
      boxShadow: `-1px -10px 0px 0px ${colors.shark}`,
    },
  },
  navigationItem: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 60,
    padding: 0,
    cursor: 'pointer',
  },
  navigationIcon: {
    position: 'relative',
    height: 60,
    transition: '0.5s ease-in-out',
    color: colors.shark,
  },
  navigationIconActive: {
    transform: 'translateY(-30px)',
  },
  navigationText: {
    position: 'absolute',
    color: colors.shark,
    opacity: 0,
    bottom: 0,
    transition: '0.5s ease-in-out',
    fontWeight: 600,
  },
  navigationTextActive: {
    opacity: 1,
    transform: 'translateY(-0px)',
  },
}))

export default useStyles