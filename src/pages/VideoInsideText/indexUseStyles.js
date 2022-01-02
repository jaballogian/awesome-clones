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
    width: '100%',
    height: '100%',
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
  },
}))

export default useStyles