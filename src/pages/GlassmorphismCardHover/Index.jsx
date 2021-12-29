import React from 'react'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './IndexUseStyles'

const Index = () => {
  const classes = useStyles()

  const titleList = [
    'Card One',
    'Card One',
    'Card One',
  ]

  return (
    <Box className={classes.root}>
      {titleList.map((item, index) => (
        <Card 
          key={index}
          className={classes.card}
        >
          <Box className={classes.content}>
            {/* NUMBER */}
            <Typography
              variant='h2'
              className={classes.number}
            >
              {`0${index}`}
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
            <Link href='#'>
              Read More
            </Link>
          </Box>
        </Card>      
      ))}
    </Box>
  )
}

export default Index
