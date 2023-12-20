import { ReactNode } from 'react'
import './SaleCard.css'
type Props = {
  icon: ReactNode
}

function SaleCard({ icon }: Props) {
  return (
    <div className="sale-card relative  transition-shadow hover:shadow-md hover:shadow-purple-800">
      <div className="mb-5">
        <div
          className="p-5 mx-auto w-fit my-auto rounded-full bg-slate-200 bg-opacity-25
        "
        >
          <div className="m-auto text-5xl text-indigo-300">{icon}</div>
        </div>
        <h4 className="text-center mb-2 mt-4 text-purple-300">base Package</h4>
      </div>
      <h3 className="text-center text-2xl mt-auto text-gray-300">
        1,200,000 MPPT
      </h3>
      <p className="mt-3  text-center text-gray-200 text-opacity-80 font-bold">
        Available on Polygon
      </p>
      <div className="mt-auto">
        <button className="bg-purple-600 bg-opacity-40 p-3 rounded-full w-full transition-colors hover:bg-opacity-80">
          100 MATIC
        </button>
      </div>
    </div>
  )
}

export default SaleCard
