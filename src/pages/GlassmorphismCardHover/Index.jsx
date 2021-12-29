import React, { useState } from 'react'

// CONSTANTS
import customTheme from './constants'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// MUI STYLES
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// STYLES
import useStyles from './IndexUseStyles'

const Index = () => {
  const classes = useStyles()

  const [ hoveredCard, setHoveredCard ] = useState(null)

  const titleList = [
    'Card One',
    'Card Two',
    'Card Three',
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <StyledEngineProvider injectFirst>
        <Box className={classes.root}>
          {titleList.map((item, index) => (
            <Card 
              key={index}
              className={classes.card}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Box
                className={
                  hoveredCard === index ? 
                  `${classes.content} ${classes.cardHovered}` : 
                  classes.content
                }
              >
                {/* NUMBER */}
                <Typography
                  variant='h2'
                  className={classes.number}
                >
                  {`0${index + 1}`}
                </Typography>

                {/* TITLE */}
                <Typography
                  variant='h3'
                  className={classes.title}
                >
                  {item}
                </Typography>

                {/* PARAGRAPH */}
                <Typography
                  variant='subtitle1'
                  className={classes.paragraph}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                {/* LINK */}
                <Link 
                  href='#'
                  className={classes.link}
                >
                  Read More
                </Link>
              </Box>
            </Card>      
          ))}
        </Box>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default Index
