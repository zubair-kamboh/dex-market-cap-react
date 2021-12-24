import React from 'react'

import scrollformore from '../../assets/images/scrol-for-more.svg'
import heroimg from '../../assets/images/hero--img-right.svg'

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-container my-5 py-5">
        <div className="container">
          <div className="row">
            <div
              className="
                col-lg-6 col-md-12 col-sm-12
                d-flex
                justify-content-center
                flex-column
              "
            >
              <h1 className="title mb-4">Lorem ipsum adipiscing elit</h1>
              <p className="description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                gravida neque felis sem tristique posuere
              </p>

              <div className="scrol-for-more-container d-flex justify-content-start align-items-center">
                <img
                  src={scrollformore}
                  className="img-fluid"
                  alt="scrollformore"
                />
                <p className="scroll-for-more-text ps-2 mb-0">
                  Scroll for more
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 hero-right-container">
              <img src={heroimg} alt="" className="img-fluid hero-img-right" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
