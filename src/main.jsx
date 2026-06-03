// import { render } from 'preact'
// import './index.css'
// import { App } from './app.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



// render(<App />, document.getElementById('app'))
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './app.jsx'

//const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)