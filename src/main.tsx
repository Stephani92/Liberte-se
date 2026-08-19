import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import { getRouter } from './router'
import './styles.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')

const root = createRoot(container)
const router = getRouter()

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
