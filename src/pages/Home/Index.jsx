import React from 'react'
import { useNavigate } from 'react-router-dom'

// DATA
import clonedPages from 'constants/clonedPages'

// MUIS
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconGitHub from '@mui/icons-material/GitHub'
import IconPlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import IconReceiptRounded from '@mui/icons-material/ReceiptRounded'
import IconYouTube from '@mui/icons-material/YouTube'

// STYLES
import useStyles from './indexUseStyles'

const Index = () => {
  const classes = useStyles()

  const navigate = useNavigate()

  const handleOnIconIsClicked = (inputUrl) => {
    const newWindow = window.open(inputUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Grid 
      container
      spacing={'24px'}
      className={classes.root}
    >
      {clonedPages.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12} sm={6} lg={4}
        >
          <Card className={classes.cardRoot}>
            {/* PREVIEW IMAGE */}
            <Box
              component='img'
              src={item.preview}
              alt=''
              className={classes.cardImage}
            />

            {/* TITLE */}
            <Typography 
              variant='h5'
              className={classes.cardTitle}
            >
              {item.title}
            </Typography>

            {/* ICONS CONTAINER */}
            <Box className={classes.cardsIconContainer}>
              {/* SOURCE ICON */}
              <IconButton onClick={() => handleOnIconIsClicked(item.source)}>
                <IconYouTube/>
              </IconButton>
              
              {/* CREDITS ICON */}
              <IconButton onClick={() => handleOnIconIsClicked(item.credits)}>
                <IconReceiptRounded/>
              </IconButton>

              {/* GITHUB ICON */}
              <IconButton onClick={() => handleOnIconIsClicked(item.githubCode)}>
                <IconGitHub/>
              </IconButton>

              {/* PLAY ICON */}
              <IconButton onClick={() => navigate(`/clones/${item.id}`)}>
                <IconPlayArrowRounded/>
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Index
