import React from "react";
import Button from "../Button/Button";
import './DownloadApp.scss'

const DownloadApp = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container bg_theme_green rounded py-4">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h4 className="text-light download_text ms-0 ms-md-2">
                  Let’s go. Get a link <br /> to download the app.
                </h4>
              </div>
            </div>
            <div className="col-md-8">
                <div className="input_div d-flex align-items-center d-flex mt-0 mt-md-2">
                    <input className="border-0 px-2 rounded mt-3 mt-md-0 w-75 me-2" placeholder="Enter mobile phone number" type="number" name="" id="" />
                <Button className='btn px-3 apply_btn mt-3 mt-md-0 dark'>APPLY TO DRIVE</Button>
                </div>

           
          
       
       
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
