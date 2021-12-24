import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from '../Header'
import './home.css'

const Home = () => {
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

              <div className="input-container mb-5">
                <div className="input-inner-container">
                  <img src="./assets/images/email-icon.svg" alt="" />
                  <input
                    type="text"
                    name="email-input"
                    className="email-input"
                    placeholder="Enter your email address"
                  />
                </div>
                <button className="btn signup-btn" type="submit">
                  Get Started
                </button>
              </div>

              <div className="logos-container">
                <img src="./assets/images/coinmarketcap.svg" alt="" />
                <img src="./assets/images/bitcoin.svg" alt="" />
                <img src="./assets/images/coinbase.svg" alt="" />
                <img src="./assets/images/binance.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 hero-right-container">
              <img
                src="./assets/images/hero-right.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
