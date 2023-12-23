import { ReactNode } from 'react'
import './SaleCard.css'
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
  return (
    <div className="sale-card relative  transition-shadow hover:shadow-md hover:shadow-purple-800">
      <div className="mb-5">
        <div
          className="p-5 mx-auto w-fit my-auto rounded-full  bg-gradient-to-br bg-indigo-300 bg-opacity-25
        "
        >
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
        <button className="bg-purple-600 bg-opacity-40 p-3 rounded-full w-full transition-colors hover:bg-opacity-80">
          {price} {priceSymbol}
        </button>
      </div>
    </div>
  )
}

export default SaleCard
