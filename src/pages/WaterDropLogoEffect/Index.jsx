import React from 'react'

// MUIS
import Box from '@mui/material/Box'

// MUI ICONS
import IconApple from '@mui/icons-material/Apple'

// STYELS
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.drop}>
        <IconApple className={classes.icon}/>
      </Box>
    </Box>
  )
}

export default Index
