import React from "react";
import { SpotlightPreview } from "./components/SpotLightUsage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WalletContextProvider } from "./context/WalletProvider";
import Tipping from "./pages/Tipping";
import Gradient from './pages/Gradient.jsx'
import '@solana/wallet-adapter-react-ui/styles.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpotlightPreview />,
  },
  {
    path: "/tipping",
    element: <Tipping />,
  },
  {
    path: "/gradient",
    element: <Gradient />,
  },
]);

function App() {
  return (
    <WalletContextProvider>
      <RouterProvider router={router} />
    </WalletContextProvider>
  );
}

export default App;
