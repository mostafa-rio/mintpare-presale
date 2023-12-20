import React, { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  icon: ReactNode
}

function InfoCard({ title, description, icon }: Props) {
  return (
    <div
      className="p-5 pr-3 w-72 rounded-lg bg-indigo-600 bg-opacity-20 
      transition-all hover:shadow-lg hover:scale-105"
    >
      <div className="flex flex-col gap-5">
        <div className="h-14 w-14 flex justify-center my-auto rounded-full bg-slate-200 bg-opacity-15">
          <div className="m-auto text-2xl">{icon}</div>
        </div>
        <div className="my-auto text-lg">{title}</div>
      </div>
      <div className="text-gray-400 text-sm mt-3">{description}</div>
    </div>
  )
}

export default InfoCard
