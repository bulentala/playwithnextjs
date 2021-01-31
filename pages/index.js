import WhiteDama from 'components/WhiteDama'
import React from 'react'

const Index = () => {
  return (
    <>
      <div className=' border-2 border-yellow-400 h-screen bg-gray-800 p-12 text-center flex flex-col justify-between items-center'>
        <WhiteDama />
        <div className='space-y-4'>
          <div className='bg-yellow-400 rounded py-3 px-20'>
            <h1 className='flex flex-col text-6xl font-bold'>
              <span className='text-2xl font-semibold  '>FETHİYE</span>
              TAKSİ
            </h1>
          </div>
          <p className='text-3xl text-white'>Güvenli Yolculuk</p>
          <p className='text-5xl text-semibold text-white'>7/24</p>
        </div>
        <p className='text-yellow-500'>www.aciltaksi.com</p>
        <WhiteDama />
      </div>
    </>
  )
}

export default Index
