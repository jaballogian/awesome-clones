import React from 'react'

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

const Index = () => {
  return (
    <Grid container>
      {clonedPages.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12}
        >
          <Card>
            {/* PREVIEW IMAGE */}
            <Box
              component='img'
              src={item.preview}
            />

            {/* TITLE */}
            <Typography variant='h5'>
              {item.title}
            </Typography>

            {/* SOURCE ICON */}
            <IconButton>
              <IconYouTube/>
            </IconButton>
            
            {/* CREDITS ICON */}
            <IconButton>
              <IconReceiptRounded/>
            </IconButton>

            {/* GITHUB ICON */}
            <IconButton>
              <IconGitHub/>
            </IconButton>

            {/* PLAY ICON */}
            <IconButton>
              <IconPlayArrowRounded/>
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Index
