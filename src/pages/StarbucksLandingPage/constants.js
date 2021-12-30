// MUIS
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let customTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 'sans-serif',
    ].join(','),
  },
})

customTheme = responsiveFontSizes(customTheme)

export default customTheme

export const colors = {
  deepBlush: '#EB7495', // PINK
  funGreen: '#017143', // GREEN
  hopbush: '#D752B1', // LIGHT VIOLET
  mineShaft: '#333333', // DARK GRAY
}