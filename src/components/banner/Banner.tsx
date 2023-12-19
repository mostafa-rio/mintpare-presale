import './Banner.css'
import InfoCard from './InfoCard'
import { MdBarChart } from 'react-icons/md'
import { FaShieldHeart } from 'react-icons/fa6'
import { SiEthereum } from 'react-icons/si'

type Props = {}

function Banner({}: Props) {
  return (
    <div className="banner">
      <div className="main-container flex flex-col h-screen">
        <header className="py-3 flex justify-between align-middle">
          <h1 className="text-teal-500 my-auto">
            <strong>MintPare Presale</strong>
          </h1>
          <button className="btn-primary">Connect</button>
        </header>
        <div className="max-w-4xl text-center mt-36 mx-auto">
          <h2 className="text-2xl lg:text-6xl">
            We believe in making the product with the help of community
          </h2>
          <p className="mt-3 lg:mt-8 text-gray-400 max-w-xl m-auto">
            MintPare presale tokens (MPPT) are valid erc20 tokens that will
            beused to empower tools and products at MintPare community
          </p>
          <div className="mt-10">
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
        <div className="mt-14 lg:mt-auto mb-20 flex gap-3 flex-wrap justify-center">
          <InfoCard
            icon={<FaShieldHeart />}
            title="Supported By Community"
            description="MPPT and MPT will have the full support of our community at NFTOCEAN and MintPare"
          />
          <InfoCard
            icon={<MdBarChart />}
            title="Listing Plans"
            description="With the help of MintPare and NFTOCEAN partners MPPT will be listed on popular markets"
          />
          <InfoCard
            icon={<SiEthereum />}
            title="Popular Networks"
            description="MPPT and MPT will be available on popular networks such as Ethereum, and Polygon"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
