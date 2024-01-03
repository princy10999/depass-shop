import React from 'react'

const Popupbox = ({data}) => {
  return (
    <div className="grid gap-8 grid-cols-3">
    {data.map((item, index) => {
      return (
        <>
          <div className="bg-white rounded-lg shadow-lg shadow-[0px_4.09393px_4.09393px_#000000] ">
            <div className="flex flex-col items-center justify-center p-2">
              <img src={item.img} alt="diamond" width="36px" height="36px" className=" h-[36px] mb-1" />
              <div className="text-black text-lg   text-[#8A8A8D] font-medium">{item?.name}</div>
            </div>
          </div>
        </>
      );
    })}
  </div>
  )
}

export default Popupbox
