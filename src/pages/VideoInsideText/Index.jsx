import React from 'react'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

// STYLES
import useStyles from './indexUseStyles'

// VIDEOS
import video from './assets/video.mp4'

const Index = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Card>
        {/* VIDEO */}
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
    </Box>
  )
}

export default Index
