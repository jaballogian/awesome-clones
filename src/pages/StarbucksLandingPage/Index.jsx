import React from 'react'

// CONSTANTS
import customTheme from './constants'

// IMAGES
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
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

// MUI ICONS
import IconFacebook from '@mui/icons-material/Facebook'
import IconTwitter from '@mui/icons-material/Twitter'
import IconInstagram from '@mui/icons-material/Instagram'

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

  const coffeeOptionsList = [
    Image1,
    Image2,
    Image3,
  ]

  const socialMediasList = [
    { icon: IconFacebook },
    { icon: IconTwitter },
    { icon: IconInstagram },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        {/* HEADER */}
        <AppBar 
          position='static' 
          className={classes.header}
        >
          <Toolbar className={classes.toolbar}>
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

        {/* TEXTS */}
        <Box className={classes.textContainer}>
          {/* TITLE */}
          <Typography 
            variant='h2'
            className={classes.title}
          >
            It's not just coffee
            <br/>It's&nbsp;
            <span className={classes.titleGreen}>
              Starbucks
            </span>
          </Typography>

          {/* PARAGRAPH */}
          <Typography 
            variant='subtitle1'
            className={classes.paragraph}
          >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>

          {/* LEARN MORE */}
          <Link 
            href='#'
            className={classes.learnMore}
          >
            <Typography variant='subtitle1'>
              Learn More
            </Typography>
          </Link>
        </Box>

        {/* IMAGE */}
        <Box className={classes.imageContainer}>
          <Box
            component='img'
            className={classes.imageCoffee}
            src={Image1}
            alt=''
          />
        </Box>

        {/* COFFEE OPITIONS */}
        <List className={classes.coffeeOptionsRoot}>
          {coffeeOptionsList.map((item, index) => (
            <ListItem
              key={index}
              className={classes.coffeeOptionsItem}
            >
              <Box
                component='img'
                src={item}
                alt=''
                className={classes.coffeeOptionsImage}
              />
            </ListItem>
          ))}
        </List>

        {/* SOCIAL MEDIAS */}
        <List className={classes.socialMediasRoot}>
          {socialMediasList.map((item, index) => (
            <Link 
              key={index}
              href='#'
            >
              <ListItem className={classes.socialMediasItem}>
                <item.icon className={classes.socialMediasIcon}/>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default Index
