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
  shark: '#222327', // DARK GRAY
  springGreen: '#29FD53', // LIGHT GREEN
}