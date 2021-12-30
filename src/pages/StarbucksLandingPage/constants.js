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
  mineShaft: '#333333', // DARK GRAY
}