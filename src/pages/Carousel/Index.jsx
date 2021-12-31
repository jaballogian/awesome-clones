import React, { useState } from 'react'

// MUIS
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

// IMAGES
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import Image4 from './assets/image4.jpg'
import Image5 from './assets/image5.jpg'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const imagesList = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
  ]

  const [ selectedImage, setSelectedImage ] = useState(imagesList[0])

  return (
    <Box 
      sx={{ backgroundImage: `url(${selectedImage})` }}
      className={classes.root}
    >
      {/* SELECTED IMAGE */}
      <Box 
        sx={{ backgroundImage: `url(${selectedImage})` }}
        className={classes.selectedImage}
      >
        {/* RADIO BUTTONS */}
        <RadioGroup 
          row
          value={selectedImage}
          onChange={(event) => setSelectedImage(event.target.value)}
        >
          {imagesList.map((item, index) => (
            <FormControlLabel 
              key={index}
              value={item} 
              control={<Radio className={classes.radioButton} />} 
              label='' 
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  )
}

export default Index
