import React from 'react'

// CONSTANTS
import customTheme from './constants'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'

// STYLES
import useStyles from './indexUseStyles'

// VIDEOS
import video from './assets/video.mp4'

const Index = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        {/* VIDEO */}
        <Card>
          <CardMedia
            component='video'
            src={video}
            alt=''
            autoPlay
            loop
            muted
            className={classes.video}
          />
        </Card>
        {/* TEXT */}
        <Typography
          variant='h1'
          className={classes.text}
        >
          Video<br/>Inside<br/>Text
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Index
