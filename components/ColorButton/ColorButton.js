import React from 'react'

const ColorButtone = ({text}) => {
  return (
    <div className=" mb-7 mt-6">
    <div className=" bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer rounded-lg">
      <div className="flex h-full w-full items-center justify-center">
        <p className=" text-white text-lg   font-normal p-2">{text}</p>
      </div>
    </div>
  </div>
  )
}

export default ColorButtone