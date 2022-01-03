import React, { useState } from 'react'

// MUIS
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

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

  const [ activeItem, setActiveItem ] = useState(0)

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
    <Box className={classes.root}>
      <List className={classes.navigationsList}>
        {/* SELECTED ITEM */}
        <Box 
          className={classes.selectedItem}
          sx={{ transform: `translateX(calc(70 * ${activeItem}px))` }}
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
  )
}

export default Index
