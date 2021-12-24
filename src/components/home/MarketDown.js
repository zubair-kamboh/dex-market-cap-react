import React from 'react'
import recentlyadded from '../../assets/images/recently-added.svg'
import search from '../../assets/images/input-search.svg'
import trending from '../../assets/images/trending.svg'
import topGainers from '../../assets/images/top-charts.svg'

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
          <CryptoCard headimg={recentlyadded} title="Recently Added" />
          <CryptoCard headimg={trending} title="Trending" />
          <CryptoCard headimg={topGainers} title="Top Gainers" />
        </div>
      </div>
    </section>
  )
}

export default MarketDown
