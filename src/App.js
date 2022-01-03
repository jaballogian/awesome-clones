import React from 'react'
import { Routes, Route } from 'react-router-dom'

// CONSTANTS
import clonedPages from 'constants/clonedPages'

// PAGES
import Home from 'pages/Home/Index'

function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home/>}
      />
      {clonedPages.map((item, index) => (
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
