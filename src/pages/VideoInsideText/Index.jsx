import React from 'react'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './indexUseStyles'

// VIDEOS
import video from './assets/video.mp4'

const Index = () => {
  const classes = useStyles()

  return (
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
        Image<br/>Inside<br/>Video
      </Typography>
    </Box>
  )
}

export default Index