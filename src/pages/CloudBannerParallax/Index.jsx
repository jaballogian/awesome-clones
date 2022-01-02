import React from 'react'

// IMAGES
import ImageCloud1 from './assets/cloud1.png'
import ImageCloud2 from './assets/cloud2.png'
import ImageCloud3 from './assets/cloud3.png'
import ImageCloud4 from './assets/cloud4.png'
import ImageCloud5 from './assets/cloud5.png'

// MUIS
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const cloudsList = [ 
    ImageCloud1,
    ImageCloud2,
    ImageCloud3,
    ImageCloud4,
    ImageCloud5,
    ImageCloud5,
    ImageCloud4,
    ImageCloud3,
    ImageCloud2,
    ImageCloud1,
  ]

  return (
    <Box className={classes.root}>
      {/* TITLE */}
      <Typography
        variant='h1'
        className={classes.title}
      >
        Castle
      </Typography>

      {/* CLOUDS */}
      <Box className={classes.cloudsContainer}>
        {cloudsList.map((item, index) => (
          <Box
            key={index}
            component='img'
            src={item}
            alt=''
            style={{ '--i': index }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Index
