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
                '',
                10,
                'We are launching a rocket with the power of community',
                5000,
              ]}
              wrapper="span"
              deletionSpeed={90}
              speed={2}
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
        <div className="mt-20 mr-auto  md:mt-automb-20 flex flex-col lg:flex-row gap-3 flex-wrap justify-start">
          <InfoCard icon={<FaShieldHeart />} title="Supported By Community" />
          <InfoCard icon={<MdBarChart />} title="Direct Listing Plans" />
          <InfoCard icon={<SiEthereum />} title="Popular Networks" />
        </div>
      </div>
    </div>
  )
}

export default Banner
