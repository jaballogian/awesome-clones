// CONSTANT
import { colors, boxShadows } from './constants'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.cinder,
    flexWrap: 1,
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(red, magenta)',
      clipPath: 'circle(30% at right 70%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(${colors.blueRibbon}, ${colors.amaranth})`,
      clipPath: 'circle(20% at 10% 10%)',
    },
  },
  card: {
    backgroundColor: boxShadows.softWhite,
    position: 'relative',
    width: 280,
    height: 400,
    margin: 30,
    boxShadow: `20px 20px 50px ${boxShadows.hardBlack}`,
    borderRadius: 15,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${boxShadows.hardWhite}`,
    borderLeft: `1px solid ${boxShadows.hardWhite}`,
    backdropFilter: 'blur(5px)',
    zIndex: 1,
  },
  content: {
    padding: 20,
    textAlign: 'center',
    transform: 'translateY(100px)',
    opacity: 0,
    transition: '0.5s',
  },
  cardHovered: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  number: {
    position: 'absolute',
    top: -80,
    right: 30,
    fontSize: '8em',
    fontWeight: 800,
    color: boxShadows.softWhite,
    pointerEvents: 'none',
  },
  title: {
    fontSize: '1.8em',
    color: 'white',
    zIndex: 1,
  },
  paragraph: {
    fontSize: '1em',
    color: 'white',
    fontWeight: 300,
  },
  link: {
    position: 'relative',
    display: 'inline-block',
    padding: '8px 20px',
    marginTop: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    textDecoration: 'none',
    fontWeight: 500,
    boxShadow: `0px 5px 15px ${boxShadows.hardBlack}`,
  },
}))

export default useStyles