import React from 'react'

// MUIS
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconAccountCircleRounded from '@mui/icons-material/AccountCircleRounded'
import IconChatRounded from '@mui/icons-material/ChatRounded'
import IconHelpRounded from '@mui/icons-material/HelpRounded'
import IconHomeRounded from '@mui/icons-material/HomeRounded'
import IconLockRounded from '@mui/icons-material/LockRounded'
import IconLogoutRounded from '@mui/icons-material/LogoutRounded'
import IconSettings from '@mui/icons-material/Settings'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const navigationsList = [
    {
      icon: IconHomeRounded,
      text: 'Home',
    },
    {
      icon: IconAccountCircleRounded,
      text: 'Home',
    },
    {
      icon: IconChatRounded,
      text: 'Messages',
    },
    {
      icon: IconSettings,
      text: 'Setting',
    },
    {
      icon: IconHelpRounded,
      text: 'Help',
    },
    {
      icon: IconLockRounded,
      text: 'Password',
    },
    {
      icon: IconLogoutRounded,
      text: 'Sign Out',
    },
  ]

  return (
    <Box className={classes.root}>
      <List className={classes.navigationContainer}>
        {navigationsList.map((item, index) => (
          <ListItem
            key={index}
            className={classes.navigationItem}
          >
            {/* ICON */}
            <item.icon className={classes.navigationIcon}/>

            {/* TEXT */}
            <Typography
              variant='subtitle1'
              className={classes.navigationText}
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
