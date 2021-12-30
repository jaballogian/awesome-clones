import React from 'react'

// IMAGES
import ImageLogo from './assets/logo.png'

// MUIS
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'

// STYLES
import useStyles from './IndexUseStyles'

const Index = () => {
  const classes = useStyles()

  const navigationList = [
    'Home',
    'Menu',
    `What's New`,
    'Contact',
  ]

  return (
    <Box className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* LOGO */}
          <Link 
            href='#'
            className={classes.logoLink}
          >
            <Box
              component='img'
              src={ImageLogo}
              alt=''
              className={classes.logo}
            />
          </Link>

          {/* NAVIGATIONS */}
          <List className={classes.navigation}>
            {navigationList.map((item, index) => (
              <ListItem
                key={index}
                className={classes.navigationItem}
              >
                <Link 
                  href='#'
                  className={classes.navigationLink}
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Index
