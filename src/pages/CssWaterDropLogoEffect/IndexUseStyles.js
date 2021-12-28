import { colors, boxShadows } from './colors'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.gallery,
  },
  drop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 150,
    height: 150,
    boxShadow: `inset 10px 10px 10px ${boxShadows.softBlack}, 
      15px 25px 10px ${boxShadows.softBlack}, 
      15px 20px 10px ${boxShadows.softBlack}, 
      inset -10px -10px 15px ${boxShadows.softLight}`,
    borderRadius: '50%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 35,
      left: 35,
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 25,
      left: 50,
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
  },
  icon: {
    height: '80px !important',
    width: '80px !important',
    color: colors.tundora,
  },
}))

export default useStyles