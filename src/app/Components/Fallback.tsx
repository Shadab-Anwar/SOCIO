import React from 'react'

const Fallback = () => {
  return (
    <div>
        <div className="flex justify-center m-5 mb-8">
        <div className="card lg:card-side bg-base-100 drop-shadow-xl shadow-gray-500 lg:h-64 lg:w-2xl">
             <div className="w-80 h-80 flex justify-center md:w-xl">
            <div className="flex w-80 flex-col gap-4 p-5 md:w-xl">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
          </div></div>
      
    </div>
  )
}

export default Fallback
