import React, { useState } from 'react'

// CONSTANTS
import customTheme, { colors } from './constants'

// IMAGES
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
import Image4 from './assets/image4.png'
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
import IconClose from '@mui/icons-material/Close'
import IconFacebook from '@mui/icons-material/Facebook'
import IconTwitter from '@mui/icons-material/Twitter'
import IconInstagram from '@mui/icons-material/Instagram'
import IconMenu from '@mui/icons-material/Menu'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const coffeeOptionsList = [
    { 
      image: Image1, 
      color: colors.funGreen, 
    },
    { 
      image: Image2, 
      color: colors.hopbush, 
    },
    { 
      image: Image3, 
      color: colors.deepBlush, 
    },
    { 
      image: Image4, 
      color: colors.brown, 
    },
  ]
  
  const [ selectedImage, setSelectedImage ] = useState(coffeeOptionsList[0])
  const [ isNavigationShown, setIsNavigationShown ] = useState(false)

  const navigationList = [
    'Home',
    'Menu',
    `What's New`,
    'Contact',
  ]

  const socialMediasList = [
    { icon: IconFacebook },
    { icon: IconTwitter },
    { icon: IconInstagram },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        {/* CIRCLE */}
        <Box 
          className={classes.circle}
          sx={{ backgroundColor: selectedImage.color }}
        />

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

            {/* TOGGLE ICON */}
            {isNavigationShown ?
            <IconClose 
              className={classes.toggleIcon}
              onClick={() => setIsNavigationShown(false)}
            /> :
            <IconMenu 
              className={classes.toggleIcon}
              onClick={() => setIsNavigationShown(true)}
            />}

            {/* NAVIGATIONS */}
            <List 
              className={
                isNavigationShown ? 
                classes.navigationSmallScreen :
                classes.navigation
              }
            >
              {navigationList.map((item, index) => (
                <ListItem
                  key={index}
                  className={classes.navigationItem}
                >
                  <Link 
                    href='#'
                    className={classes.navigationLink}
                  >
                    <Typography 
                      variant='subtitle1'
                      className={classes.navigationText}
                    >
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

        {/* SELECTED COFFEE IMAGE */}
        <Box className={classes.imageContainer}>
          <Box
            component='img'
            className={classes.imageCoffee}
            src={selectedImage.image}
            alt=''
          />
        </Box>

        {/* COFFEE OPITIONS */}
        <List className={classes.coffeeOptionsRoot}>
          {coffeeOptionsList.map((item, index) => (
            <ListItem
              key={index}
              className={classes.coffeeOptionsItem}
              onClick={() => setSelectedImage(item)}
            >
              <Box
                component='img'
                src={item.image}
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
