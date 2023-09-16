import React from "react";
import Button from "../Button/Button";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import CarPng from '../../public/car.png'
import './banner.scss'

const Banner = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-end flex-column mt-3 mt-md-0">
              <div className="banner_div mb-4">
                <h1 className="fw-bold">
                  DOWNLOAD APP, <br />
                  SAVE MONEY, MAKE
                  <br />
                  FRIENDS!
                </h1>
                <p className="text-secondary">
                  Its simple and its free. Play your part in reducing <br/> Carbon
                  Footprint and help Mother Nature to <br/> sustain its beauty. So
                  what are you waiting for ?<br/> Lets ride together
                </p>
                <div className="d-flex mt-4">
                  <Button className="dark d-flex align-items-center px-3">
                    <FaGooglePlay /> &nbsp;
                    {/* <img src={require("/")} alt="" /> */}
                    Download 
                  </Button>
                  <Button className="dark d-flex align-items-center ms-3 px-3">
                    <FaAppStoreIos /> &nbsp;
                    {/* <img src={require("/")} alt="" /> */}
                    Download
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <div>
                <img className="w-75 mx-auto d-block" src={CarPng.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
