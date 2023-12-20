import { ReactNode } from 'react'
import { FaCalendarCheck, FaCoins, FaNetworkWired } from 'react-icons/fa6'

function AboutPresale() {
  return (
    <div className="main-container">
      <section className="lg:flex justify-between relative">
        <div className="effect absolute h-80 right-0 left-0 opacity-20"></div>
        <div className="max-w-xl my-auto">
          <h1 className="text-2xl lg:text-5xl">All About MPPT and MPT</h1>
          <p className="mt-5 lg:text-xl text-opacity text-gray-400">
            MintPare Community aim to launch its own token listed on popular
            markets and backed by amazing communities like NFTOCEAN and its
            partners like UCFinance. For this to happen we are launching a
            presale token named MPPT for our fans to support use and take this
            journey with us. We are planning to launch on Polygon and Ethereum
            step by step.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <ListItem
            icon={<FaCoins />}
            title={'Total Supply'}
            description="MPPT tokens are presale tokens with 1000000 total supply"
          />
          <ListItem
            icon={<FaNetworkWired />}
            title={'Networks'}
            description="MPPT and MPT tokens will be launched on Polygon and Ethereum"
          />
          <ListItem
            icon={<FaCalendarCheck />}
            title={'Launch Date'}
            description="MPPT Tokens will be available by the end of Summer 2025"
          />
        </div>
      </section>
    </div>
  )
}

const ListItem = ({
  title,
  description,
  icon,
}: {
  title: string
  icon: ReactNode
  description: string
}) => {
  return (
    <div className="p-5 max-w-xl rounded bg-indigo-600 bg-opacity-5 flex gap-4">
      <div className="h-14 w-14 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15">
        <div className="m-auto text-2xl">{icon}</div>
      </div>

      <div>
        <p className="text-xl">{title}</p>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default AboutPresale
