import { colors, boxShadows } from './colors'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const xsMultiplier = 1.3
const smMultiplier = 2

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
    // XL SCREEN
    [theme.breakpoints.only('xs')]: {
      width: 150 * xsMultiplier,
      height: 150 * xsMultiplier,
      boxShadow: `inset ${10 * xsMultiplier}px ${10 * xsMultiplier}px ${10 * xsMultiplier}px ${boxShadows.softBlack}, 
        ${15 * xsMultiplier}px ${25 * xsMultiplier}px ${10 * xsMultiplier}px ${boxShadows.softBlack}, 
        ${15 * xsMultiplier}px ${20 * xsMultiplier}px ${10 * xsMultiplier}px ${boxShadows.softBlack}, 
        inset ${-1 * xsMultiplier}px ${-1 * xsMultiplier}px ${15 * xsMultiplier}px ${boxShadows.softLight}`,
      '&::before': {
        top: 35 * xsMultiplier,
        left: 35 * xsMultiplier,
        width: 20 * xsMultiplier,
        height: 20 * xsMultiplier,
      },
      '&::after': {
        top: 25 * xsMultiplier,
        left: 50 * xsMultiplier,
        width: 10 * xsMultiplier,
        height: 10 * xsMultiplier,
      },
    },
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      width: 150 * smMultiplier,
      height: 150 * smMultiplier,
      boxShadow: `inset ${10 * smMultiplier}px ${10 * smMultiplier}px ${10 * smMultiplier}px ${boxShadows.softBlack}, 
        ${15 * smMultiplier}px ${25 * smMultiplier}px ${10 * smMultiplier}px ${boxShadows.softBlack}, 
        ${15 * smMultiplier}px ${20 * smMultiplier}px ${10 * smMultiplier}px ${boxShadows.softBlack}, 
        inset ${-1 * smMultiplier}px ${-1 * smMultiplier}px ${15 * smMultiplier}px ${boxShadows.softLight}`,
      '&::before': {
        top: 35 * smMultiplier,
        left: 35 * smMultiplier,
        width: 20 * smMultiplier,
        height: 20 * smMultiplier,
      },
      '&::after': {
        top: 25 * smMultiplier,
        left: 50 * smMultiplier,
        width: 10 * smMultiplier,
        height: 10 * smMultiplier,
      },
    },
  },
  icon: {
    height: '80px !important',
    width: '80px !important',
    color: colors.tundora,
    [theme.breakpoints.only('xs')]: {
      height: `${80 * xsMultiplier}px !important`,
      width: `${80 * xsMultiplier}px !important`,
    },
    [theme.breakpoints.only('sm')]: {
      height: `${80 * smMultiplier}px !important`,
      width: `${80 * smMultiplier}px !important`,
    },
  },
}))

export default useStyles