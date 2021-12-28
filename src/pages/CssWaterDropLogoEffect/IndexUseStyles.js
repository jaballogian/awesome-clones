import { colors, boxShadows } from './colors'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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
    [theme.breakpoints.only('xs')]: {
      width: 150 * 1.3,
      height: 150 * 1.3,
      boxShadow: `inset ${10 * 1.3}px ${10 * 1.3}px ${10 * 1.3}px ${boxShadows.softBlack}, 
        ${15 * 1.3}px ${25 * 1.3}px ${10 * 1.3}px ${boxShadows.softBlack}, 
        ${15 * 1.3}px ${20 * 1.3}px ${10 * 1.3}px ${boxShadows.softBlack}, 
        inset ${-1 * 1.30}px ${-1 * 1.30}px ${15 * 1.3}px ${boxShadows.softLight}`,
      '&::before': {
        top: 35 * 1.3,
        left: 35 * 1.3,
        width: 20 * 1.3,
        height: 20 * 1.3,
      },
      '&::after': {
        top: 25 * 1.3,
        left: 50 * 1.3,
        width: 10 * 1.3,
        height: 10 * 1.3,
      },
    },
  },
  icon: {
    height: '80px !important',
    width: '80px !important',
    color: colors.tundora,
    [theme.breakpoints.only('xs')]: {
      height: `${80 * 1.3}px !important`,
      width: `${80 * 1.3}px !important`,
    },
  },
}))

export default useStyles