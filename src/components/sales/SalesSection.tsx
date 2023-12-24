import { GiJupiter, GiMoonOrbit, GiGalaxy } from 'react-icons/gi'
import './SalesSection.css'
import SalesCard from './saleCard/SaleCard'

type Props = {}

function SalesSection({}: Props) {
  return (
    <div className="main-container relative">
      <div className="mb-10 max-w-xl m-auto">
        <h3 className="text-center text-3xl">Presale Token (MPPT) Packages </h3>
        <p className="text-center max-w-lg mx-auto mt-4 text-indigo-300">
          MintPare Presale Token holders will be the first users to receive
          MintPare tokens once its listed
        </p>
        <div className="effect absolute h-80 right-0 left-0 opacity-20"></div>
      </div>
      <div className="gap-3 flex flex-wrap justify-center p-3">
        <SalesCard
          key={1}
          icon={<GiMoonOrbit />}
          packageName="Earth Package"
          availableOn="Available on Polygon"
          tokensAmount={15000}
          price={50}
          priceSymbol="MATIC"
        />
        <SalesCard
          key={2}
          icon={<GiJupiter />}
          packageName="Jupiter Package"
          availableOn="Available on Polygon"
          tokensAmount={30000}
          price={100}
          priceSymbol="MATIC"
        />
        <SalesCard
          key={3}
          icon={<GiGalaxy />}
          packageName="Galaxy Package"
          availableOn="Available on Polygon"
          tokensAmount={60000}
          price={200}
          priceSymbol="MATIC"
        />
      </div>
    </div>
  )
}

export default SalesSection
