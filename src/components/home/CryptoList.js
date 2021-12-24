import React from 'react'

const CryptoList = ({
  enigma,
  redicon,
  number,
  cointitle,
  coinshort,
  percentage,
}) => {
  return (
    <div className="crypo-container mt-3 d-flex justify-content-between align-items-center">
      <div className="crypto-cotainer-inner d-flex justify-content-between align-items-center">
        <p className="number">{number}</p>
        <div className="currency-name-container ms-3">
          <p class="name-td">
            <img src={enigma} class="img-fluid" alt="" />
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
