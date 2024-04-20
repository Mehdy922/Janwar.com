import React from 'react'
import bannerImg from 'components/Dieren.jpeg'

const banner = () => {
  return (
    <div className='bg-primayBG py-12 x1:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-col md:flex-row-reverse justify-between items-center gap-14'>
            <div className='md:w-1/2'>
                <h1 className='text-5x1 font-light mb-5'>Collections</h1>
                <p className='text-x1 mb-7'>
                    Feel free to explore our shop to find a variety of pets here.
                </p>
                <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
                Shop Now
                </button>
            </div>
            <div className="md:w-1/2">
                <img src={bannerImg} alt=""/>
            </div>
        </div>
    </div>
    
  )
}

export default banner