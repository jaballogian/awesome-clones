// MATERIAL UI CORES
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
  amaranth: '#E91E63', // PINKISH RED
  blueRibbon: '#2169F3', // BLUE
  cinder: '#161623', // DARK BLUE,
}

export const boxShadows = {
  hardBlack: 'rgba(0, 0, 0, 0.5)',
  hardWhite: 'rgba(255, 255, 255, 0.5)',
  softBlack: 'rgba(0, 0, 0, 0.1)',
  softWhite: 'rgba(255, 255, 255, 0.05)',
}