import React from "react";
import One from "../../public/one.svg";
import Two from "../../public/two.svg";
import Three from "../../public/three.svg";
import Frame1 from "../../public/Frame.svg";
import Frame2 from "../../public/Frame1.svg";
import Frame3 from "../../public/Frame2.svg";
import './TereBenefits.scss'

const TereBenefits = () => {
  return (
    <>
      <section>
        <div className="container" id="terebenefits">
          <div className="row my-4">
            <h2 className="text-center fw-bold theme_font_bold">
              <span className="text_green">TERE</span> BENEFITS
            </h2>
          </div>
          <div className="row mb-4 mt-5 pt-5">
            <div className="col-md-6 my-auto d-flex flex-column align-items-md-start align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img src={One.src} alt="" />
                </div>
                <div>
                  <h3 className="ms-3 theme_font_bold">
                    Flexible <br />
                    sworking hours
                  </h3>
                </div>
              </div>
              <p className="text-secondary theme_font mt-3 mt-md-0">
                You can decide when, and how much <br />
                time you want to drive.
              </p>
            </div>
            <div className="col-md-6">
              <div className="mt-4 mt-md-0">
                <img className="d-block ms-auto mobile_image_center" src={Frame1.src} alt="" />
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-5 pt-5">
            <div className="col-md-6">
              <div className="mt-4 mt-md-0">
                <img className="d-block d-md-inline ms-md-auto mx-auto" src={Frame2.src} alt="" />
              </div>
            </div>
            <div className="col-md-6 my-auto d-flex flex-column align-items-md-end align-items-center order-md-last order-first">
              <div className="d-flex align-items-start">
                <div>
                  <img src={Two.src} alt="" />
                </div>
                <div>
                  <h3 className="ms-3 theme_font_bold">Earnings</h3>
                </div>
              </div>
              <p className="text-secondary theme_font mt-3 mt-md-0">
                By driving with tere you can <br />
                earn more.
              </p>
            </div>
          </div>
          <div className="row mb-4 mt-5 pt-5">
            <div className="col-md-6 my-auto d-flex flex-column align-items-md-start align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img src={Three.src} alt="" />
                </div>
                <div>
                  <h3 className="ms-3 theme_font_bold">
                    Customer <br />
                    support 24/7
                  </h3>
                </div>
              </div>
              <p className="text-secondary theme_font mt-3 mt-md-0">
                Tere is a local service provider and we are proud to <br />
                support you in your local language. We are proud <br />
                to be at your service 24/7!
              </p>
            </div>
            <div className="col-md-6">
              <div className="mt-4 mt-md-0">
                <img className="d-block ms-auto mobile_image_center" src={Frame3.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TereBenefits;
