import { GiTwoCoins } from 'react-icons/gi'
import './SalesSection.css'
import SalesCard from './saleCard/SaleCard'

type Props = {}

function SalesSection({}: Props) {
  return (
    <div className="main-container">
      <div className="mb-10 max-w-xl m-auto">
        <h3 className="text-center text-3xl">Presale Token (MPPT) Packages </h3>
        <p className="text-center max-w-lg mx-auto mt-4 text-indigo-300">
          MintPare Presale Token holders will be the first users to receive
          MintPare tokens once its listed
        </p>
      </div>
      <div className="gap-3 flex flex-wrap justify-center p-3">
        <SalesCard icon={<GiTwoCoins />} />
        <SalesCard icon={<GiTwoCoins />} />
        <SalesCard icon={<GiTwoCoins />} />
      </div>
    </div>
  )
}

export default SalesSection
