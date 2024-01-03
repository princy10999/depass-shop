import React from 'react'

const BorderButton = ({title}) => {
  return (
    <div className="px-4">
    <div
      className=" bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer rounded-lg">
      <div className="flex h-full w-full items-center justify-center bg-[#1B2335] rounded-lg back">
        <p className="  text-[#FFFFFF] text-lg font-normal text-center p-2" >{title}</p>
      </div>
    </div>
    
    </div>
  )
}

export default BorderButton