import React, { useState, useEffect } from 'react'

// CONSTANTS
import customTheme from './constants'

// IMAGES
import ImageCloud1 from './assets/cloud1.png'
import ImageCloud2 from './assets/cloud2.png'
import ImageCloud3 from './assets/cloud3.png'
import ImageCloud4 from './assets/cloud4.png'
import ImageCloud5 from './assets/cloud5.png'

// MUIS
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const [ offsetY, setOffsetY ] = useState(0)

  const cloudsList = [ 
    ImageCloud1,
    ImageCloud2,
    ImageCloud3,
    ImageCloud4,
    ImageCloud5,
  ]

  const handleOnMouseScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleOnMouseScroll)

    return () => window.removeEventListener('scroll', handleOnMouseScroll)
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.topContainer}>
        {/* TITLE */}
        <Typography
          variant='h1'
          className={classes.title}
          style={{ marginBottom: `${offsetY * 2}px`}}
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
              className={classes.itemCloud}
              style={{ '--i': index }}
            />
          ))}
        </Box>
      </Box>

      <Box className={classes.bottomContainer}>
        {/* CAPTION */}
        <Typography
          variant='h2'
          className={classes.caption}
        >
          Realistic Cloud Banner Parallax Effect
        </Typography>

        {/* PARAGRAPH */}
        <Typography
          variant='subtitle1'
          className={classes.paragraph}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Index
