import React from 'react'

// CONSTANTS
import customTheme from './constants'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'

// MUI ICONS
import IconDiamondOutlined from '@mui/icons-material/DiamondOutlined'
import IconPublicOutlined from '@mui/icons-material/PublicOutlined'
import IconRocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const cardsList = [
    {
      icon: IconDiamondOutlined,
      title: 'Card One',
    },
    {
      icon: IconPublicOutlined,
      title: 'Card Two',
    },
    {
      icon: IconRocketLaunchOutlined,
      title: 'Card Three',
    },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <Box className={classes.root}>
        {cardsList.map((item, index) => (
          <Card
            key={index}
            className={classes.card}
          >
            {/* ICON */}
            <Box className={classes.cardIconContainer}>
              <item.icon className={classes.cardIcon}/>
            </Box>

            {/* CONTENT */}
            <Box className={classes.cardContent}>
              {/* TITLE */}
              <Typography
                variant='h4'
                className={classes.cardTitle}
              >
                {item.title}
              </Typography>

              {/* CAPTION */}
              <Typography
                variant='subtitle1'
                className={classes.cardCaption}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </ThemeProvider>
  )
}

export default Index
