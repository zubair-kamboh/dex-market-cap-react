import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import footerlogoimg from '../assets/images/logo.svg'
const Footer = () => {
  return (
    <footer className="footer-container my-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <Link className="footer-logo mb-3" to="/">
              <img src={footerlogoimg} alt="logo-img" className="logo-img" />
              DexMarketCap
            </Link>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              pulvinar sem ante feugiat suscipit aenean gravida quis tincidunt.
            </p>
          </div>

          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-4">
                <ul className="footer-navlinks">
                  <li className="features mb-3">Features</li>
                  <li className="footer-navlink">
                    <Link to="#">About Us</Link>
                  </li>
                  <li className="footer-navlink">
                    <Link to="#">Pricing</Link>
                  </li>
                  <li className="footer-navlink">
                    <Link to="#">Account Information</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="footer-navlinks">
                  <li className="features mb-3">Support</li>
                  <li className="footer-navlink">
                    <Link to="#">Help Center</Link>
                  </li>
                  <li className="footer-navlink">
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="footer-navlinks">
                  <li className="features mb-3">Follow us</li>
                  <li className="footer-navlink">
                    <Link to="#">Instagram</Link>
                  </li>
                  <li className="footer-navlink">
                    <Link to="#">Facebook</Link>
                  </li>
                  <li className="footer-navlink">
                    <Link to="#">Twitter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright-container">
          <h6>© 2021 DexMarketCap. All rights reserved</h6>
          <div className="copyright-right">
            <Link to="#" className="privacy-policy">
              Privacy Policy
            </Link>
            <Link to="#">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
