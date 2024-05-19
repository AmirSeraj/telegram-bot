import React from 'react'

const CoinNum = ({totalCoin}) => {
  return (
    <div className="flex gap-2 justify-center items-center">
        <img src="./images/coin-icon.png" alt="coin" />
        <span className='text-3xl text-white font-bold'>{totalCoin}</span>
    </div>
  )
}

export default CoinNum