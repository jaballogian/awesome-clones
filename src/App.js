import React from 'react'
import { Routes, Route } from 'react-router-dom'

// PAGES
import WaterDropLogoEffect from 'pages/WaterDropLogoEffect/Index'
import GlassmorphismCardHover from 'pages/GlassmorphismCardHover/Index'
import StarbucksLandingPage from 'pages/StarbucksLandingPage/Index'
import Carousell from 'pages/Carousell/Index'
import VideoInsideText from 'pages/VideoInsideText/Index'
import CloudBannerParallax from 'pages/CloudBannerParallax/Index'

function App() {
  // PAGE ITEMS: ID, ELEMENT, SOURCE, CREDITS, GITHUB CODE
  const pages = [
    {
      id: 1,
      element: <WaterDropLogoEffect/>,
      source: 'https://www.youtube.com/watch?v=GnllGn9Oifs',
    },
    {
      id: 2,
      element: <GlassmorphismCardHover/>,
      source: 'https://www.youtube.com/watch?v=hv0rNxr1XXk',
    },
    {
      id: 3,
      element: <StarbucksLandingPage/>,
      source: 'https://www.youtube.com/watch?v=91Q6RvKvd7o',
    },
    {
      id: 4,
      element: <Carousell/>,
      source: 'https://www.youtube.com/watch?v=0wvrlOyGlq0',
    },
    {
      id: 5,
      element: <VideoInsideText/>,
      source: 'https://www.youtube.com/watch?v=S1LyYnyqRRs',
    },
    {
      id: 6,
      element: <CloudBannerParallax/>,
      source: 'https://www.youtube.com/watch?v=4p3YDQLJmSs',
    },
  ]

  return (
    <Routes>
      {pages.map((item, index) => (
        <Route 
          key={index}
          path={`/clones/${item.id}`} 
          element={item.element}
        />
      ))}
    </Routes>
  )
}

export default App
