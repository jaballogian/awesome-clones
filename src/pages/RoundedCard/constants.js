// MUIS
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let customTheme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu', 'sans-serif',
    ].join(','),
  },
})

customTheme = responsiveFontSizes(customTheme)

export default customTheme

export const colors = {
  cornflowerBlue: '#645BF6', // BLUE
  dodgerBlue: '#287BFF', // BLUE
  heliotrope: '#9A4EFF', // LIGHT VIOLET
  martinique: '#3C2846', // DARK VIOLET
  parisDaisy: '#FFEC61', // YELLOW
  razzleDazzleRose: '#FF2AE0', // PINK
  shockingPink: '#F321D7', // PINK
  springGreen: '#24FF72', // GREEN
}

export const boxShadows = {
  softWhite: 'rgba(255, 255, 255, 0.25)',
  softBlack: 'rgba(0, 0, 0, 0.15)',
}