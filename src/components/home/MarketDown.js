import React from 'react'
import recentlyadded from '../../assets/images/recently-added.svg'
import enigma from '../../assets/images/enigma.svg'

import search from '../../assets/images/input-search.svg'
import redicon from '../../assets/images/price-red-icon.svg'
import CryptoList from './CryptoList'
import CryptoCard from './CryptoCard'
const MarketDown = () => {
  return (
    <section className="marketdown-section my-5 py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h1 className="marketdown-text ">
            Today Market is down <span>2,35%</span>
          </h1>
          <div class="input-container">
            <div class="input-inner-container">
              <img src={search} alt="" />
              <input
                type="text"
                name="email-input"
                class="email-input"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <CryptoCard
            headimg={recentlyadded}
            title="Recently Added"
            number="1"
            cointitle="Bitcoin"
            coinshort="BTC"
            percentage="2.43%"
            redicon={redicon}
          />
        </div>
      </div>
    </section>
  )
}

export default MarketDown
