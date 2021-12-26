import React from 'react'
import './specificpage.css'
import cardano from '../../assets/images/Cardano (ADA).svg'
import greenarrow from '../../assets/images/green-arrow-up.svg'
import bluebtnsdown from '../../assets/images/blue-btns-down.svg'
import isymbol from '../../assets/images/marketcap-i-symbol.svg'
import redarrowdown from '../../assets/images/price-red-icon.svg'
import cardloading from '../../assets/images/card-loading.svg'
import share from '../../assets/images/share.svg'
import pricechart from '../../assets/images/price-chart.svg'
import bluearrowright from '../../assets/images/blue-arrow-right.svg'

const SpecificPage = () => {
  return (
    <section className="specific-page-section py-5">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="coin-title container ">
              <div className="d-flex justify-content-start align-items-center ">
                <img
                  src={cardano}
                  className="img-fluid cardano"
                  alt=""
                  href="#"
                />
                <h4 className="coin-title  ">
                  Cardano <span className="short">ADA</span>
                </h4>
              </div>

              <div className="d-flex justify-content-start align-items-center ">
                <h2 className="price-cardano ">$1,26</h2>{' '}
                <span className="percentage">
                  <img src={greenarrow} alt="" href="#" /> 3.16%
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="btns-outer-container">
              <div className="crypto-btns-container">
                <a className="bluebtns">
                  Buy <img src={bluebtnsdown} alt="" href="#" />
                </a>
                <a className="bluebtns">
                  Buy <img src={bluebtnsdown} alt="" href="#" />
                </a>
                <a className="bluebtns">
                  Exchange <img src={bluebtnsdown} alt="" href="#" />
                </a>
                <a className="bluebtns">
                  Gaming <img src={bluebtnsdown} alt="" href="#" />
                </a>
                <a className="bluebtns">
                  Earn Crypto <img src={bluebtnsdown} alt="" href="#" />
                </a>
              </div>

              <div className="tags-container my-5">
                <a className="tags-btns">Mineable</a>
                <a className="tags-btns">DP09</a>
                <a className="tags-btns">PoS</a>
                <a className="tags-btns">Platform</a>
                <a className="view-all">View all</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-2 my-4">
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card p-2">
              <div className="d-flex align-items-center mb-3">
                <h4 className="card-heading">Market Cap</h4>
                <img src={isymbol} className="img-fluid" alt="" />
              </div>
              <h4 className="card-price mb-2">$43,714,005,787</h4>
              <div className="d-flex  align-items-center">
                <img src={redarrowdown} className="img-fluid" alt="" />
                <p className="red-percentage">3.00%</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card p-2">
              <div className="d-flex align-items-center mb-3">
                <h4 className="card-heading">Market Cap</h4>
                <img src={isymbol} className="img-fluid" alt="" />
              </div>
              <h4 className="card-price mb-2">$43,714,005,787</h4>
              <div className="d-flex  align-items-center">
                <img src={redarrowdown} className="img-fluid" alt="" />
                <p className="red-percentage">3.00%</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card p-2">
              <div className="d-flex align-items-center mb-3">
                <h4 className="card-heading">Market Cap</h4>
                <img src={isymbol} className="img-fluid" alt="" />
              </div>
              <h4 className="card-price mb-2">$43,714,005,787</h4>
              <div className="d-flex  align-items-center">
                <img src={redarrowdown} className="img-fluid" alt="" />
                <p className="red-percentage">3.00%</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="card p-2">
              <div className="d-flex align-items-center mb-3">
                <h4 className="card-heading">Circulating Supply</h4>
                <img src={isymbol} className="img-fluid" alt="" />
              </div>
              <h4 className="card-price mb-2">$43,714,005,787</h4>
              <div className="d-flex  align-items-center">
                <img src={cardloading} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="bluebtns-charts-btns">
            <div className="bluebtns-charts-btns-inner">
              <a className="bluebtn lightbtn blue">Overview</a>
              <a className="bluebtn lightbtn">Market</a>
              <a className="bluebtn lightbtn">Historical Data</a>
              <a className="bluebtn lightbtn">Project Info</a>
              <a className="bluebtn lightbtn">Wallets</a>
              <a className="bluebtn lightbtn">Analysis </a>
              <a className="bluebtn lightbtn">Price Estimates </a>
            </div>

            <a href="" className="share">
              <img src={share} alt="" />
              Share
            </a>
          </div>
        </div>

        <div className="my-4 ">
          <img
            src={pricechart}
            draggable="false"
            alt=""
            className="w-100 img-fluid pricechart"
          />
        </div>

        <div className="row my-4">
          <h3 className="crypto-paragraph-heading">ADA Price Live Data</h3>
          <p className="crypto-paragraph">
            The live <span>Cardano price today</span> is $1,25 USD with a
            24-hour trading volume of $1.288.469.791 USD. We update our ADA to
            USD price in real-time. Cardano is down 3,63% in the last 24 hours.
            The current CoinMarketCap ranking is #6, with a live market cap of
            $41.901.326.342 USD. It has a circulating supply of 33.443.215.362
            ADA coins and a max. supply of 45.000.000.000 ADA coins.
          </p>
          <p className="crypto-paragraph">
            If you would like to know where to buy Cardano, the top
            cryptocurrency exchanges for trading in Cardano stock are currently
            Binance, OKEx, CoinTiger, FTX, and Huobi Global. You can find others
            listed on our crypto exchanges page.
          </p>
          <h3 className="crypto-paragraph-heading">ADA Price Live Data</h3>
          <p className="crypto-paragraph">
            Cardano is a proof-of-stake blockchain platform that says its goal
            is to allow “changemakers, innovators and visionaries” to bring
            about positive global change. To learn more about this project,
            check out our deep dive of Cardano.
          </p>
          <p className="crypto-paragraph">
            The open-source project also aims to “redistribute power from
            unaccountable structures to the margins to individuals” — helping to
            create a society that is more secure, transparent and fair. Cardano
            was founded back in 2017, and named after the 16th century Italian
            polymath Gerolamo Cardano. The native ADA token takes its name from
            the 19th century mathematician Ada Lovelace, widely regarded as the
            world’s first computer programmer. The ADA token is designed to
            ensure that owners can participate in the operation of the network.
            Because of this, those who hold the cryptocurrency have the right to
            vote on any proposed changes to the software.
          </p>
          <a href="#" className="readmore">
            Read more
          </a>
        </div>

        <div className="row">
          <div className="card info-card">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="half-column-container">
                  <h5 className="title">Currency Name</h5>
                  <p className="des">Cardano</p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Website</h5>
                  <p className="des">https://www.cardano.org/en/home/</p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Block Explorer</h5>
                  <p className="des">https://cardanoexplorer.com/</p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Facebook</h5>
                  <p className="des">
                    https://www.facebook.com/groups/CardanoCommunity
                  </p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Telegram</h5>
                  <p className="des">https://t.me/CardanoAnnouncements</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="half-column-container">
                  <h5 className="title">Symbol</h5>
                  <p className="des">ADA</p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Whitepaper</h5>
                  <p className="des">
                    https://www.cardano.org/en/academic-papers/
                  </p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Twitter </h5>
                  <p className="des">https://twitter.com/cardano</p>
                </div>
                <div className="half-column-container">
                  <h5 className="title">Reddit</h5>
                  <p className="des">https://www.reddit.com/r/cardano/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <h3 className="statistics-title">Cardano Statistics</h3>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="card info-card">
              <div className="statistics-card-title pb-3">
                Cardano Price Today
              </div>
              <div className="statistics-card-body">
                <div className="inner pb-1">
                  <p className="light-heading">Cardano Price (24)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">24h Low / 24h High</p>
                  <div className="black-red-container">$1.24 / $1.33 </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Cap</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Trading Volume (24h)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Dominance</p>
                  <div className="black-red-container">$1,689 B </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Rank</p>
                  <div className="black-red-container">$1,689 B</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="card info-card">
              <div className="statistics-card-title pb-3">
                Cardano Price History
              </div>
              <div className="statistics-card-body">
                <div className="inner pb-1">
                  <p className="light-heading">Cardano Price (24)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">24h Low / 24h High</p>
                  <div className="black-red-container">$1.24 / $1.33 </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Cap</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Trading Volume (24h)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Dominance</p>
                  <div className="black-red-container">$1,689 B </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Rank</p>
                  <div className="black-red-container">$1,689 B</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="card info-card">
              <div className="statistics-card-title pb-3">
                Cardano Price Yesterday
              </div>
              <div className="statistics-card-body">
                <div className="inner pb-1">
                  <p className="light-heading">Cardano Price (24)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">24h Low / 24h High</p>
                  <div className="black-red-container">$1.24 / $1.33 </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Cap</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Trading Volume (24h)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Dominance</p>
                  <div className="black-red-container">$1,689 B </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Rank</p>
                  <div className="black-red-container">$1,689 B</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="card info-card">
              <div className="statistics-card-title pb-3">Cardano Supply</div>
              <div className="statistics-card-body">
                <div className="inner pb-1">
                  <p className="light-heading">Cardano Price (24)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">24h Low / 24h High</p>
                  <div className="black-red-container">$1.24 / $1.33 </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Cap</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Trading Volume (24h)</p>
                  <div className="black-red-container">
                    $1,689 B{' '}
                    <span>
                      <img src={redarrowdown} alt="" /> 2.96%
                    </span>
                  </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Dominance</p>
                  <div className="black-red-container">$1,689 B </div>
                </div>
                <div className="inner pb-1">
                  <p className="light-heading">Market Rank</p>
                  <div className="black-red-container">$1,689 B</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="d-flex justify-content-between">
            <h3 className="statistics-title">Cardano Markets</h3>
            <a href="#" className="viewall">
              View all <img src={bluearrowright} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecificPage
