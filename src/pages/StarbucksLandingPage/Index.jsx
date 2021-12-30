import React from 'react'

// CONSTANTS
import customTheme from './constants'

// IMAGES
import ImageLogo from './assets/logo.png'

// MUIS
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'

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
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        <AppBar position='static'>
          <Toolbar className={classes.header}>
            {/* LOGO */}
            <Link href='#'>
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
                    <Typography variant='subtitle1'>
                      {item}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}

export default Index
