import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Tipping from './pages/Tipping.jsx'
import '@solana/wallet-adapter-react-ui/styles.css';
import { WalletContextProvider } from './context/WalletProvider.jsx'
import Gradient from './pages/Gradient.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
  },
  {
    path : "/tipping",
    element  : <Tipping/>
  },
  {
    path : "/gradient",
    element : <Gradient/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <WalletContextProvider>
      <RouterProvider router={router} />
    </WalletContextProvider>
  </StrictMode>,
)
