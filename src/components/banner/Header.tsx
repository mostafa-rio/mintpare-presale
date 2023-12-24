import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import logo from '../../assets/logoWithText.svg'
type Props = {}

function Header({}: Props) {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  return (
    <header className="py-3 flex justify-between align-middle">
      <h1 className="text-teal-500 my-auto">
        <img className="w-32" src={logo} title="MintPare" />
      </h1>
      <button className="btn-primary" onClick={() => open()}>
        {isConnected ? 'Connected | ' + address!.substring(0, 5) : 'Connect'}
      </button>
    </header>
  )
}

export default Header
