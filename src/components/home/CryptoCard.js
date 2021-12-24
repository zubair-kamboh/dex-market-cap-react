import React from 'react'
import CryptoList from './CryptoList'
import backward from '../../assets/images/backward.svg'
import forward from '../../assets/images/forward.svg'

import enigma from '../../assets/images/enigma.svg'
import qash from '../../assets/images/qash.svg'
import teirion from '../../assets/images/Tierion.svg'
import compound from '../../assets/images/Compound.svg'
import terra from '../../assets/images/Terra.svg'
import bitcoin from '../../assets/images/bitcoin.svg'
import harmony from '../../assets/images/Harmony.svg'
import xrp from '../../assets/images/XRP.svg'

const CryptoCard = ({ headimg, title }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card p-3">
        <div className="recently-added mb-2">
          <div className="recently-added-inner">
            <img src={headimg} alt="engima" className="img-fluid engima-img" />
            <p className="text ms-3">{title}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={backward} alt="backward" className="backward" />
            <img src={forward} alt="backward" className="forward" />
          </div>
        </div>

        <CryptoList
          number="1"
          listimg={enigma}
          cointitle="Bitcoin"
          coinshort="BTC"
          percentage="2.43%"
        />
        <CryptoList
          number="2"
          listimg={qash}
          cointitle="Qash"
          coinshort="QASH"
          percentage="2.43%"
        />
        <CryptoList
          number="3"
          listimg={harmony}
          cointitle="Harmony"
          coinshort="ONE"
          percentage="2.43%"
        />
      </div>
    </div>
  )
}

export default CryptoCard
