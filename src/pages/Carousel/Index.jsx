import React from 'react'

// MUIS
import Box from '@mui/material/Box'

// IMAGES
import Image1 from './assets/image1.jpg'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  return (
    <Box 
      sx={{ backgroundImage: `url(${Image1})` }}
      className={classes.root}
    >
    </Box>
  )
}

export default Index
