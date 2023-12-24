import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { polygon, mainnet, bscTestnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd652bf3e1fe182bf1daf02070f363752'

// 2. Create wagmiConfig
const metadata = {
  name: 'MintPare',
  description: 'MintPare presale',
}

const chains = [polygon, mainnet, bscTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: 'rgb(67 56 202)',
            color: 'white',
          },
        }}
      />
      <App />
    </WagmiConfig>
  </React.StrictMode>,
)
