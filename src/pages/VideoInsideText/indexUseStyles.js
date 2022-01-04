// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    fontSize: '25vh',
    textAlign: 'center',
    textTransform: 'uppercase',
    // color: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mixBlendMode: 'screen',
    fontWeight: 900,
    // XS AND SM SCREEN
    [theme.breakpoints.down('md')]: {
      fontSize: '25vw',
    },
  },
}))

export default useStyles