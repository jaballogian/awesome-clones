import React from 'react'
import { Routes, Route } from 'react-router-dom'

// PAGES
import CssWaterDropLogoEffect from 'pages/CssWaterDropLogoEffect/Index'
import GlassmorphismCardHover from 'pages/GlassmorphismCardHover/Index'
import StarbucksLandingPage from 'pages/StarbucksLandingPage/Index'

function App() {
  const pages = [
    {
      id: 1,
      element: <CssWaterDropLogoEffect/>,
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
