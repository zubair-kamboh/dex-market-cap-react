import React from 'react'
import redicon from '../../assets/images/price-red-icon.svg'

const CryptoList = ({ number, listimg, cointitle, coinshort, percentage }) => {
  console.log(listimg)
  return (
    <div className="crypo-container m1-2 d-flex justify-content-between align-items-center">
      <div className="crypto-cotainer-inner d-flex justify-content-between align-items-center">
        <p className="number ms-1">{number}</p>
        <div className="currency-name-container ms-3">
          <p class="name-td">
            <img src={listimg} class="img-fluid" alt="" />
            <span class="currency-name ms-2">{cointitle}</span>
            <span class="currency-short ms-2">{coinshort}</span>
          </p>
        </div>
      </div>

      <p class="price-td">
        <img src={redicon} alt="" />
        {percentage}
      </p>
    </div>
  )
}

export default CryptoList
