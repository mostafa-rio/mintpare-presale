import { ReactNode } from 'react'
import { FaCalendarCheck, FaCoins, FaNetworkWired } from 'react-icons/fa6'

function AboutPresale() {
  return (
    <div className="main-container">
      <section className="lg:flex justify-center gap-10 relative">
        <div className="effect absolute h-80 right-0 left-0 opacity-20"></div>
        <div className="max-w-3xl my-auto mx-auto  text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl text-gray-200 text-opacity-85">
            All about MPPT and MPT tokens
          </h1>
          <p className="my-5 lg:text-lg text-opacity text-gray-100 text-opacity-65">
            <p>
              MintPare Community is embarking on an exciting expansion across
              popular networks to foster community growth. Backed by the dynamic
              <a
                className="font-bold ml-1"
                href="https://twitter.com/NFTocean_markett"
                target="_blank"
              >
                NFTOCEAN community{' '}
              </a>
              and it's esteemed partners like
              <a
                href="https://twitter.com/ucfinance1?lang=en"
                className="font-bold ml-1"
                target="_blank"
              >
                UCFinance
              </a>
              , we're launching a presale for our token (MPPT). We invite fans
              to join us on this venture, where early supporters not only
              contribute to the project's success but also enjoy exclusive
              benefits.
            </p>
            <p>
              Participating in our presale comes with perks. Early supporters
              will receive up to $1000 worth of MPT tokens in an airdrop,
              providing an immediate and valuable return on their investment.
              Additionally, these backers will receive MPT tokens after the
              listing on the market, solidifying their commitment and
              involvement in the MintPare project.
            </p>
            <p>
              It's worth noting that the MintPare product and its token (MPT)
              will make their public debut after the launch of the NFTOCEAN NUT
              token. This positioning within a strategic timeline enhances
              MintPare's market impact.
            </p>
          </p>
        </div>

        <div className="flex flex-col  w-full mx-auto max-w-2xl gap-3 ">
          <ListItem
            icon={<FaCoins />}
            title={'Total Supply'}
            description="1,000,000,000 Tokens"
          />
          <ListItem
            icon={<FaNetworkWired />}
            title={'Networks'}
            description="Both MPPT and MPT tokens will be launched on Polygon and Ethereum"
          />
          <ListItem
            icon={<FaCalendarCheck />}
            title={'Estimated Launch Date'}
            description="MPT Tokens will be available by the end of Summer 2025"
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
    <div className="p-5 w-full  rounded bg-indigo-600 bg-opacity-5 flex gap-2 md:gap-4">
      <div className="h-14 w-14 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15">
        <div className="m-auto text-2xl">{icon}</div>
      </div>

      <div className="max-w-56 lg:max-w-3xl">
        <p className="md:text-xl">{title}</p>
        <p className="mt-2 text-gray-400 text-xs md:text-sm">{description}</p>
      </div>
    </div>
  )
}

export default AboutPresale
