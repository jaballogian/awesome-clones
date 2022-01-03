// CONSTANTS
import { colors } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const smMultiplier = 1.5
const mdMultiplier = 2.5
const lgMultiplier = 3.25

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
    height: 60,
    padding: '0px 20px',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      height: 60 * smMultiplier,
      padding: `0px ${20 * smMultiplier}px`,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      height: 60 * mdMultiplier,
      padding: `0px ${20 * mdMultiplier}px`,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      height: 60 * lgMultiplier,
      padding: `0px ${20 * lgMultiplier}px`,
    },
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
      left: -21.5,
      width: 20,
      height: 20,
      borderTopRightRadius: 20,
      boxShadow: `1px -10px 0px 0px ${colors.shark}`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      right: -21.5,
      width: 20,
      height: 20,
      borderTopLeftRadius: 20,
      boxShadow: `-1px -10px 0px 0px ${colors.shark}`,
    },
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      width: 60 * smMultiplier,
      height: 60 * smMultiplier,
      border: `${6 * smMultiplier}px solid ${colors.shark}`,
      '&::before': {
        boxShadow: `${1 * smMultiplier}px -${10 * smMultiplier}px 0px 0px ${colors.shark}`,
        left: -21.5 * smMultiplier,
        width: 20 * smMultiplier,
        height: 20 * smMultiplier,
        borderTopRightRadius: 20 * smMultiplier,
      },
      '&::after': {
        boxShadow: `-${1 * smMultiplier}px -${10 * smMultiplier}px 0px 0px ${colors.shark}`,
        right: -21.5 * smMultiplier,
        width: 20 * smMultiplier,
        height: 20 * smMultiplier,
        borderTopLeftRadius: 20 * smMultiplier,
      },
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      width: 60 * mdMultiplier,
      height: 60 * mdMultiplier,
      border: `${6 * mdMultiplier}px solid ${colors.shark}`,
      '&::before': {
        boxShadow: `${1 * mdMultiplier}px -${10 * mdMultiplier}px 0px 0px ${colors.shark}`,
        left: -21.5 * mdMultiplier,
        width: 20 * mdMultiplier,
        height: 20 * mdMultiplier,
        borderTopRightRadius: 20 * mdMultiplier,
      },
      '&::after': {
        boxShadow: `-${1 * mdMultiplier}px -${10 * mdMultiplier}px 0px 0px ${colors.shark}`,
        right: -21.5 * mdMultiplier,
        width: 20 * mdMultiplier,
        height: 20 * mdMultiplier,
        borderTopLeftRadius: 20 * mdMultiplier,
      },
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      width: 60 * lgMultiplier,
      height: 60 * lgMultiplier,
      border: `${6 * lgMultiplier}px solid ${colors.shark}`,
      '&::before': {
        boxShadow: `${1 * lgMultiplier}px -${10 * lgMultiplier}px 0px 0px ${colors.shark}`,
        left: -21.5 * lgMultiplier,
        width: 20 * lgMultiplier,
        height: 20 * lgMultiplier,
        borderTopRightRadius: 20 * lgMultiplier,
      },
      '&::after': {
        boxShadow: `-${1 * lgMultiplier}px -${10 * lgMultiplier}px 0px 0px ${colors.shark}`,
        right: -21.5 * lgMultiplier,
        width: 20 * lgMultiplier,
        height: 20 * lgMultiplier,
        borderTopLeftRadius: 20 * lgMultiplier,
      },
    },
  },
  navigationItem: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 60,
    padding: 0,
    cursor: 'pointer',
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      width: 60 * smMultiplier,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      width: 60 * mdMultiplier,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      width: 60 * lgMultiplier,
    },
  },
  navigationIcon: {
    position: 'relative',
    height: 60,
    width: 24,
    transition: '0.5s ease-in-out',
    color: colors.shark,
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      height: 60 * smMultiplier,
      width: 24 * smMultiplier,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      height: 60 * mdMultiplier,
      width: 24 * mdMultiplier,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      height: 60 * lgMultiplier,
      width: 24 * lgMultiplier,
    },
  },
  navigationIconActive: {
    transform: 'translateY(-30px)',
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      transform: `translateY(-${30 * smMultiplier}px)`,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      transform: `translateY(-${30 * mdMultiplier}px)`,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      transform: `translateY(-${30 * lgMultiplier}px)`,
    },
  },
  navigationText: {
    position: 'absolute',
    color: colors.shark,
    opacity: 0,
    bottom: 0,
    transition: '0.5s ease-in-out',
    fontWeight: 600,
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      fontSize: 18,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      fontSize: 28,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      fontSize: 40,
    },
  },
  navigationTextActive: {
    opacity: 1,
    transform: 'translateY(-6px)',
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      transform: `translateY(-${6 * smMultiplier}px)`,
    },
    // MD SCREEN
    [theme.breakpoints.only('md')]: {
      transform: `translateY(-${6 * mdMultiplier}px)`,
    },
    // LG AND XL SCREENS
    [theme.breakpoints.up('lg')]: {
      transform: `translateY(-${6 * lgMultiplier}px)`,
    },
  },
}))

export default useStyles