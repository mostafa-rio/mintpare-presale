import { ReactNode } from 'react'

type Props = {
  title: string
  icon: ReactNode
}

function InfoCard({ title, icon }: Props) {
  return (
    <div
      className="p-2 pr-3 w-72 rounded-full bg-indigo-800 bg-opacity-50 lg:bg-opacity-30 
      transition-all hover:shadow-lg hover:scale-105"
    >
      <div className="flex gap-3">
        <div className="h-10 w-10 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15">
          <div className="m-auto text-2xl text-indigo-300">{icon}</div>
        </div>
        <div className="my-auto text-md text-indigo-200">{title}</div>
      </div>
      {/* <div className="text-gray-400 text-sm mt-3">{description}</div> */}
    </div>
  )
}

export default InfoCard
