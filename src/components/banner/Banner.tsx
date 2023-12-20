import './Banner.css'
import InfoCard from './InfoCard'
import { MdBarChart } from 'react-icons/md'
import { FaShieldHeart } from 'react-icons/fa6'
import { SiEthereum } from 'react-icons/si'
import Spline from '@splinetool/react-spline'
import { TypeAnimation } from 'react-type-animation'

type Props = {}

function Banner({}: Props) {
  return (
    <div className="banner">
      <div className="main-container h-screen flex flex-col">
        <header className="py-3 flex justify-between align-middle">
          <h1 className="text-teal-500 my-auto">
            <strong>MintPare Presale</strong>
          </h1>
          <button className="btn-primary">Connect</button>
        </header>
        <div className=" spline-wrapper">
          <Spline
            className="spline"
            scene="https://prod.spline.design/MyoySUjk716jMwjv/scene.splinecode"
          />
        </div>
        <div className="max-w-3xl text-left mt-36 mr-auto">
          <h2 className="text-4xl font-bold md:text-6xl text-left">
            <TypeAnimation
              sequence={[
                'We are launching a rocket with the power of community',
              ]}
              wrapper="span"
              deletionSpeed={50}
              speed={50}
              repeat={1000}
            />
          </h2>
          <p className="mt-3  md:mt-8 text-gray-400 max-w-xl mr-auto md:text-xl">
            MintPare presale tokens (MPPT) are valid erc20 tokens that will
            beused to empower tools and products at MintPare community
          </p>
          <div className="mt-10">
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
        <div className="mt-14 mr-auto  md:mt-automb-20 flex flex-col lg:flex-row gap-3 flex-wrap justify-start">
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
