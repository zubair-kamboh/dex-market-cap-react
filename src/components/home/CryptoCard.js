import React from 'react'
import CryptoList from './CryptoList'
import backward from '../../assets/images/backward.svg'
import forward from '../../assets/images/forward.svg'
const CryptoCard = ({
  headimg,
  title,
  number,
  enigma,
  redicon,
  cointitle,
  coinshort,
  percentage,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card p-3">
        <div className="recently-added">
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
          engima={enigma}
          redicon={redicon}
          number={number}
          cointitle={cointitle}
          coinshort={coinshort}
          percentage={percentage}
        />
        <CryptoList
          engima={enigma}
          redicon={redicon}
          number={number}
          cointitle={cointitle}
          coinshort={coinshort}
          percentage={percentage}
        />
        <CryptoList
          engima={enigma}
          redicon={redicon}
          number={number}
          cointitle={cointitle}
          coinshort={coinshort}
          percentage={percentage}
        />
      </div>
    </div>
  )
}

export default CryptoCard
