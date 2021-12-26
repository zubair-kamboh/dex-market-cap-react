import React from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable, MDBNavLink } from 'mdbreact'
import img from '../../assets/images/chart-red.svg'
import binance from '../../assets/images/Cryptocurrency-1.svg'
import start from '../../assets/images/table-star.svg'
import downarrow from '../../assets/images/price-red-icon.svg'
import ethereum from '../../assets/images/etherium-eth.png'
import binancecoin from '../../assets/images/binance-coin.svg'

import terra from '../../assets/images/Terra.svg'
import solana from '../../assets/images/Solana.svg'
import cardano from '../../assets/images/Cardano (ADA).svg'
import usdcoin from '../../assets/images/USD Coin (USDC).svg'
import xrp from '../../assets/images/XRP (XRP).svg'
import polkadot from '../../assets/images/Polkadot (DOT).svg'
import avalanche from '../../assets/images/Avalanche (AVAX).svg'

import Dogecoin from '../../assets/images/Dogecoin (DOGE).svg'
import shiba from '../../assets/images/SHIBA INU (SHIB).svg'
import Polygon from '../../assets/images/Polygon (MATIC).svg'
import binanceusd from '../../assets/images/binance-usd.svg'
import greenchart from '../../assets/images/green-chart.svg'

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Price',
        field: 'p',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Price Changes',
        field: 'pc',
        sort: 'asc',
        width: 200,
      },
      {
        label: '1H %',
        field: 'oH',
        sort: 'asc',
        width: 100,
      },
      {
        label: '24H %',
        field: 'tfH',
        sort: 'asc',
        width: 150,
      },
      {
        label: '7D%',
        field: 'sD',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Market Cap',
        field: 'mc',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Volume',
        field: 'v',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Supply',
        field: 's',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Liquidity',
        field: 'l',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Graph',
        field: 'g',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 1
          </p>
        ),
        name: (
          <td class="name">
            <img src={binance} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Bitcoin</span>
            <span class="ms-2 short">BTC</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },

      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 2
          </p>
        ),
        name: (
          <td class="name">
            <img src={ethereum} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Ethereum</span>
            <span class="ms-2 short">ETH</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },

      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 3
          </p>
        ),
        name: (
          <td class="name">
            <img src={binancecoin} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Binance Coin</span>
            <span class="ms-2 short">BNB</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },

      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 4
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 5
          </p>
        ),
        name: (
          <td class="name">
            <img src={solana} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Solana</span>
            <span class="ms-2 short">SOL</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={greenchart} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 6
          </p>
        ),
        name: (
          <td class="name">
            <img src={cardano} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Cardano</span>
            <span class="ms-2 short">ADA</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={greenchart} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 7
          </p>
        ),
        name: (
          <td class="name">
            <img src={usdcoin} class="img-fluid" width={35} alt="" />
            <span class="ms-2">USD Coin</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 8
          </p>
        ),
        name: (
          <td class="name">
            <img src={xrp} class="img-fluid" width={35} alt="" />
            <span class="ms-2">XRP</span>
            <span class="ms-2 short">XRP</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 9
          </p>
        ),
        name: (
          <td class="name">
            <img src={polkadot} class="img-fluid" width={35} alt="" />
            <span class="ms-2">DOT</span>
            <span class="ms-2 short">DOT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={greenchart} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 10
          </p>
        ),
        name: (
          <td class="name">
            <img src={avalanche} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Avalaunche</span>
            <span class="ms-2 short">AVAX</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 11
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 12
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 12
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 13
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
      {
        id: (
          <p className="id d-flex align-items-center  mb-0">
            <img src={start} alt="star " className="me-1" /> 14
          </p>
        ),
        name: (
          <td class="name">
            <img src={terra} class="img-fluid" width={35} alt="" />
            <span class="ms-2">Tether</span>
            <span class="ms-2 short">USDT</span>
          </td>
        ),
        p: <p className="p mb-0">$46,793.34</p>,
        pc: <p className="p mb-0">$46,793.34</p>,
        oH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 0,01%
          </p>
        ),
        tfH: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 1,82%
          </p>
        ),
        sD: (
          <p className="oH  mb-0">
            <img src={downarrow} className="me-1" alt="downarrow" /> 4,69%
          </p>
        ),

        mc: <p className=".mc mb-0">$46,793.34</p>,
        v: <p className=".mc mb-0">$46,793.34</p>,
        s: <p className=".mc mb-0">$46,793.34</p>,
        l: <p className=".mc mb-0">$46,793.34</p>,
        g: <img src={img} alt="graph" />,
      },
    ],
  }

  return (
    <Link style={{ textDecoration: 'none' }} to="/specific">
      <MDBDataTable data={data} />
    </Link>
  )
}

export default DatatablePage
