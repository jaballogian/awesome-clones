import React from 'react'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const cardsList = [
    'Card One',
    'Card Two',
    'Card Three',
  ]

  return (
    <Box className={classes.root}>
      {cardsList.map((item, index) => (
        <Card
          key={index}
          className={classes.card}
        >
          {/* TITLE */}
          <Typography
            variant='h2'
            className={classes.cardTitle}
          >
            {item}
          </Typography>

          {/* CAPTION */}
          <Typography
            variant='subtitle1'
            className={classes.cardCaption}
          >
            {item}
          </Typography>
        </Card>
      ))}
    </Box>
  )
}

export default Index
