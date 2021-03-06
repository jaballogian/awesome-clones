// CONSTANTS
import { colors, boxShadows } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.martinique,
    flexWrap: 'wrap',
    padding: 20,
    // XS AND SM SCREEN
    [theme.breakpoints.down('md')]: {
      padding: '20px 0px 50px',
    },
  },
  card: {
    position: 'relative',
    width: 320,
    height: 450,
    backgroundColor: colors.dodgerBlue,
    borderRadius: 20,
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 30,
    boxShadow:
      `0px 15px 0px white,
      inset 0px -15px 0px ${boxShadows.softWhite},
      0px 45px 0px ${boxShadows.softBlack}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -140,
      left: '-40%',
      width: '100%',
      height: '150%',
      backgroundImage: `linear-gradient(90deg, transparent, ${boxShadows.softWhite})`,
      transform: 'rotate(35deg)',
      pointerEvents: 'none',
      filter: 'blur(5px)',
    },
    '&:nth-child(1)': {
      backgroundImage: `linear-gradient(to bottom, ${colors.razzleDazzleRose}, ${colors.cornflowerBlue})`,
    },
    '&:nth-child(2)': {
      backgroundImage: `linear-gradient(to bottom, ${colors.parisDaisy}, ${colors.shockingPink})`,
    },
    '&:nth-child(3)': {
      backgroundImage: `linear-gradient(to bottom, ${colors.springGreen}, ${colors.heliotrope})`,
    },
    // XS SCREEN
    [theme.breakpoints.only('xs')]: {
      margin: '30px 0px',
    },
    // SM SCREEN
    [theme.breakpoints.only('sm')]: {
      margin: '30px 20px',
    },
  },
  cardIconContainer: {
    width: 140,
    height: 120,
    position: 'relative',
    paddingBottom: 20,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: colors.martinique,
    display: 'flex',
    justifyContent: 'center',
    boxShadow:
      `0px 10px 0px ${boxShadows.softBlack},
      inset 0px -8px 0px white`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -50,
      width: 50,
      height: 50,
      borderTopRightRadius: 50,
      boxShadow: `15px -15px 0px 15px ${colors.martinique}`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: -50,
      width: 50,
      height: 50,
      borderTopLeftRadius: 50,
      boxShadow: `-15px -15px 0px 15px ${colors.martinique}`,
    },
  },
  cardIcon: {
    width: 100,
    height: 100,
    color: 'white',
    position: 'relative',
    zIndex: 1,
  },
  cardContent: {
    position: 'absolute',
    width: '100%',
    padding: 30,
    paddingTop: 140,
    textAlign: 'center',
    color: 'white',
  },
  cardTitle: {
    marginBottom: 10,
  },
  cardCaption: {
    lineHeight: 1.5,
  },
}))

export default useStyles