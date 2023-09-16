import React from 'react'
import Logo from '../../public/logo-black.png'
import './Footer.scss'
import Button from './../Button/Button';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className="mt-5 py-5 border_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-2 mt-5 mt-md-0 d-flex justify-content-center">
                <div className="mt-5">
                  <img src={Logo.src} alt="" />
                </div>
              </div>
              <div className="col-md-3 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                <ul>
                  <li><h3 className="theme_font_bold">Be Our Friend</h3></li>
                  <li className="theme_font">3, Season Park, Jakarta</li>
                  <li className="theme_font">support@foodyar.co,id</li>
                  <li className="theme_font">021 - 1111 - 2222</li>
                </ul>
              </div>
              <div className="col-md-3 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                <ul>
                  <li><h3 className="theme_font_bold">Be Our Friend</h3></li>
                  <li className="theme_font">3, Season Park, Jakarta</li>
                  <li className="theme_font">support@foodyar.co,id</li>
                  <li className="theme_font">021 - 1111 - 2222</li>
                </ul>
              </div>
              <div className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                <div>
                <Button className="dark">
                    <FaGooglePlay /> &nbsp;
                    {/* <img src={require("/")} alt="" /> */}
                    Download
                  </Button>
                  <Button className="dark ms-3">
                    <FaAppStoreIos /> &nbsp;
                    {/* <img src={require("/")} alt="" /> */}
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="container">
        <div className="row py-3 text_green text-center ">
          <p>All Rights Reserved tere by Codematics 2023</p>
        </div>
        </div>
    </>
  )
}

export default Footer