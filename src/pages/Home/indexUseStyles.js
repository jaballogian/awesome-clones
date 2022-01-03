// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 40,
  },
  cardRoot: {
    position: 'relative',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: '0.25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
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