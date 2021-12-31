// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 100,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backdropFilter: 'blur(5px)',
    },
  },
}))

export default useStyles