// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 40,
  },
  cardRoot: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    objectFit: 'cover',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardsIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default useStyles