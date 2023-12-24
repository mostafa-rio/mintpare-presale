import { ReactNode } from 'react'
import './SaleCard.css'
import { useAccount, useChainId, useSwitchNetwork } from 'wagmi'
import presaleABI from '../../../presaleABI'
import { formatEther, parseEther } from 'viem'
import { toast } from 'react-hot-toast'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { getPublicClient, getWalletClient } from 'wagmi/actions'
import { GiAlienFire } from 'react-icons/gi'
import { polygon } from 'viem/chains'
type Props = {
  icon: ReactNode
  packageName: string
  tokensAmount: number
  price: number
  priceSymbol: string
  availableOn: string
}

function SaleCard({
  icon,
  packageName,
  tokensAmount,
  price,
  priceSymbol,
  availableOn,
}: Props) {
  const { isConnected, address } = useAccount()
  const chainId = useChainId()
  const { switchNetwork, isLoading: isSwitching } = useSwitchNetwork()
  const { open: openConnectModal } = useWeb3Modal()
  const client = getPublicClient()

  const handleBuy = async () => {
    if (isSwitching) return
    if (chainId !== 137) {
      toast('Please switch to Polygon network')
      return switchNetwork?.(137)
    }
    if (!isConnected) {
      return openConnectModal()
    }
    const balance = await client.getBalance({ address: address! })
    const balanceToEth = formatEther(balance)
    if (+balanceToEth <= price) {
      return toast("You don't have enough fund!", {
        icon: <GiAlienFire />,
      })
    }
    // transaction
    const walletClient = await getWalletClient()
    const { request } = await client.simulateContract({
      account: address,
      address: '0x1374343203a728689d03BfB7843002774126f83a',
      abi: presaleABI,
      chain: polygon,
      functionName: 'buyTokens',
      value: parseEther(price.toString(), 'wei'),
    })
    if (walletClient) await walletClient.writeContract(request)
    else toast('Failed to run transaction. Please reconnect your wallet.')
  }

  return (
    <div className="sale-card relative  transition-shadow hover:shadow-md hover:shadow-purple-800">
      <div className="mb-5">
        <div className="p-5 mx-auto w-fit my-auto rounded-full  bg-gradient-to-br bg-indigo-300 bg-opacity-25">
          <div className="m-auto text-5xl  text-indigo-200 ">{icon}</div>
        </div>
        <h4 className="text-center mb-2 mt-4 text-purple-300">{packageName}</h4>
      </div>
      <h3 className="text-center text-2xl mt-auto text-gray-300">
        {tokensAmount} MPPT
      </h3>
      <p className="mt-3  text-center text-gray-200 text-opacity-80 font-bold">
        {availableOn}
      </p>
      <div className="mt-auto">
        <button
          onClick={handleBuy}
          className="bg-purple-600 bg-opacity-40 p-3 rounded-full w-full transition-colors hover:bg-opacity-80"
        >
          {price} {priceSymbol}
        </button>
      </div>
    </div>
  )
}

export default SaleCard
