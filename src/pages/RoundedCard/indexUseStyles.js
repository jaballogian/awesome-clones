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
    padding: 40,
  },
  card: {
    position: 'relative',
    width: 320,
    height: 450,
    backgroundColor: colors.dodgerBlue,
    borderRadius: 20,
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    boxShadow: `0px 15px 0px white,
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
  },
  cardTitle: {},
  cardCaption: {},
}))

export default useStyles