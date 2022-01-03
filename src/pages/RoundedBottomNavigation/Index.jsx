import React, { useState, useContext } from 'react'

// CONSTANTS
import customTheme from './constants'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// MUIS
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'

// MUI ICONS
import IconCameraAltRounded from '@mui/icons-material/CameraAltRounded'
import IconChatRounded from '@mui/icons-material/ChatRounded'
import IconHomeRounded from '@mui/icons-material/HomeRounded'
import IconPersonRounded from '@mui/icons-material/PersonRounded'
import IconSettingsRounded from '@mui/icons-material/SettingsRounded'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const { breakpointType } = useContext(AllPagesContext)

  const [ activeItem, setActiveItem ] = useState(0)

  let baseMultiplier = 1
  if(breakpointType === 'sm') baseMultiplier = 1.5
  else if(breakpointType === 'md') baseMultiplier = 2.5

  const navigationsList = [
    {
      icon: IconHomeRounded,
      text: 'Home',
    },
    {
      icon: IconPersonRounded,
      text: 'Profile',
    },
    {
      icon: IconChatRounded,
      text: 'Message',
    },
    {
      icon: IconCameraAltRounded,
      text: 'Photo',
    },
    {
      icon: IconSettingsRounded,
      text: 'Setting',
    },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        <List className={classes.navigationsList}>
          {/* SELECTED ITEM */}
          <Box 
            className={classes.selectedItem}
            sx={{ transform: `translateX(calc(60 * ${baseMultiplier} * ${activeItem}px))` }}
          />

          {/* NAVIGATIONS LIST */}
          {navigationsList.map((item, index) => (
            <ListItem
              key={index}
              className={classes.navigationItem}
              onClick={() => setActiveItem(index)}
            >
              {/* IMAGE */}
              <item.icon 
                className={
                  activeItem === index ?
                  `${classes.navigationIcon} ${classes.navigationIconActive}` :
                  classes.navigationIcon
                }
              />

              {/* TEXT */}
              <Typography 
                variant='subtitle1'
                className={
                  activeItem === index ?
                  `${classes.navigationText} ${classes.navigationTextActive}` :
                  classes.navigationText
                }
              >
                {item.text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default Index
