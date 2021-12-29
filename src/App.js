import React from 'react'
import { Routes, Route } from 'react-router-dom'

// PAGES
import CssWaterDropLogoEffect from 'pages/CssWaterDropLogoEffect/Index'

function App() {
  const pages = [
    {
      id: 1,
      element: <CssWaterDropLogoEffect/>,
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
