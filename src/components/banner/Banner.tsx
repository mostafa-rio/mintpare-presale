import './Banner.css'
import InfoCard from './InfoCard'
import { MdBarChart } from 'react-icons/md'
import { FaShieldHeart } from 'react-icons/fa6'
import { SiEthereum } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'
import { GiSolarSystem } from 'react-icons/gi'
import Header from './Header'
// import rocket from '../../assets/rocket.gif'
import React from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

type Props = {}

function Banner({}: Props) {
  return (
    <div className="banner">
      <div className="main-container h-screen flex flex-col">
        <Header />
        <div className=" spline-wrapper">
          {/* <img loading="eager" src={rocket} /> */}
          <Spline
            className="spline"
            scene="https://prod.spline.design/MyoySUjk716jMwjv/scene.splinecode"
          />
        </div>
        <div className="max-w-3xl text-left mt-36 mr-auto">
          <div className="effect absolute h-80 right-0 left-0 opacity-20"></div>
          <div className="text-8xl -rotate-12 fixed -left-3 top-14 opacity-0 lg:opacity-45 -z-10">
            <GiSolarSystem />
          </div>
          <h2 className="text-4xl min-h-24 font-bold md:text-6xl text-left">
            <TypeAnimation
              sequence={[
                '',
                10,
                "MintPare's Rocket-Fueled Adventure Begins 🚀",
                5000,
              ]}
              wrapper="span"
              deletionSpeed={90}
              speed={2}
              repeat={1000}
            />
          </h2>
          <p className="mt-3  md:mt-8 text-gray-400 max-w-xl mr-auto md:text-xl">
            MintPare's presale tokens (MPPT) are ERC-20 compliant, unlocking a
            world of possibilities to empower and strengthen the MintPare
            community.
          </p>
          <div className="mt-10">
            <a href="#about-section" className="btn-primary">
              Learn More
            </a>
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
