import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./TereWorks.scss";
import "../../app/styles.css";
import Mobile from "../../public/mobile.svg";

// import required modules
import { Pagination } from "swiper/modules";

const TereWorks = () => {
  return (
    <>
      {/* for desktop */}

      <div className="container" id="tereworks">
        <div className="row mt-5 pt-3 mb-4">
          <h2 className="text-center fw-bold theme_font_bold_bold">
            HOW <span className="text_green">TERE</span> WORKS
          </h2>
          <p className="text-center text-secondary fs_400 fs_20">
            Download and install the tere app. Enter your phone <br /> number and make your user account. when approved you <br /> may start driving.
          </p>
        </div>
      </div>

      <section className="my-5 d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center flex-column justify-content-center">
              <div className="text-md-end">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5827 19.1247L24.3411 21.3758L25.6713 26.0486L29.9006 24.8889V43H35.3578V19.1247H30.5827Z" fill="#75BF7A" />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">REQUEST A RIDE</h5>
                <p className="theme_font text-secondary">
                  Have to reach office or going <br /> for shopping ? <br /> Just put your current location <br /> and destination and search a <br /> ride that suits you
                </p>
              </div>

              <div className="text-md-end mt-4">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M34.7777 29.811L38.9047 24.5585V20.1245H23.5563V25.2406H32.2878L27.9562 30.7319L30.0367 33.8357H31.1623C33.4134 33.8357 34.4025 35.0295 34.4025 36.4961C34.4025 37.9627 33.4134 39.1565 31.1623 39.1565C29.0817 39.1565 28.0585 38.2015 27.5128 36.6325L22.8059 39.3611C24.2725 42.8742 27.5469 44.4773 31.1623 44.4773C35.7668 44.4773 39.8597 41.7487 39.8597 36.4961C39.8597 33.1877 37.7109 30.8343 34.7777 29.811Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">INSTANT NOTIFICATIONS</h5>
                <p className="theme_font text-secondary">
                  Get instant notifications for <br /> your rides and be in contact <br /> with fellow riders all the time
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mobile_bg">
                <Swiper
                   pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  >
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center flex-column justify-content-center">
              <div className="text-md-start">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.1573 43H39.3924V37.7474H31.3772L35.3336 33.7569C37.5165 31.574 39.0513 29.1182 39.0513 26.2532C39.0513 21.4441 35.2313 18.6472 30.9679 18.6472C27.6594 18.6472 24.4533 20.3185 22.9185 23.8657L27.523 26.5602C28.1711 25.0595 29.3648 23.968 31.0361 23.968C32.6391 23.968 33.5941 24.9912 33.5941 26.492C33.5941 27.8904 32.5709 29.2888 31.1725 30.7213L23.1573 39.0435V43Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">POST A RIDE</h5>
                <p className="theme_font text-secondary">
                  Going somewhere but hate to <br /> travel alone - <br /> just post your ride details and <br /> publish it
                </p>
              </div>

              <div className="text-md-start mt-4">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M40.5488 33.132H38.1612V28.0159H32.6358V33.132H27.6561L35.2621 18.1247H29.3956L21.7896 33.132V38.18H32.6358V42H38.1612V38.18H40.5488V33.132Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">CASHLESS PAYMENT</h5>
                <p className="theme_font text-secondary">
                  Payment made easy by using <br /> your own Wallet - no more <br /> cash to carry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* for mobile */}

      <section className="my-5 d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="mobile_bg">
                <Swiper
                 pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                loop={true}
                autoplay={{ delay: 3000 }}>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="mx-auto d-block w-75" src={Mobile.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center flex-column justify-content-center mt-5">
              <div className="text-center">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5827 19.1247L24.3411 21.3758L25.6713 26.0486L29.9006 24.8889V43H35.3578V19.1247H30.5827Z" fill="#75BF7A" />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">REQUEST A RIDE</h5>
                <p className="theme_font text-secondary">
                  Have to reach office or going <br /> for shopping ? <br /> Just put your current location <br /> and destination and search a <br /> ride that suits you
                </p>
              </div>

              <div className="text-center mt-3">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.1573 43H39.3924V37.7474H31.3772L35.3336 33.7569C37.5165 31.574 39.0513 29.1182 39.0513 26.2532C39.0513 21.4441 35.2313 18.6472 30.9679 18.6472C27.6594 18.6472 24.4533 20.3185 22.9185 23.8657L27.523 26.5602C28.1711 25.0595 29.3648 23.968 31.0361 23.968C32.6391 23.968 33.5941 24.9912 33.5941 26.492C33.5941 27.8904 32.5709 29.2888 31.1725 30.7213L23.1573 39.0435V43Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">POST A RIDE</h5>
                <p className="theme_font text-secondary">
                  Going somewhere but hate to <br /> travel alone - <br /> just post your ride details and <br /> publish it
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center flex-column justify-content-center">
              <div className="text-center mt-3">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M34.7777 29.811L38.9047 24.5585V20.1245H23.5563V25.2406H32.2878L27.9562 30.7319L30.0367 33.8357H31.1623C33.4134 33.8357 34.4025 35.0295 34.4025 36.4961C34.4025 37.9627 33.4134 39.1565 31.1623 39.1565C29.0817 39.1565 28.0585 38.2015 27.5128 36.6325L22.8059 39.3611C24.2725 42.8742 27.5469 44.4773 31.1623 44.4773C35.7668 44.4773 39.8597 41.7487 39.8597 36.4961C39.8597 33.1877 37.7109 30.8343 34.7777 29.811Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">INSTANT NOTIFICATIONS</h5>
                <p className="theme_font text-secondary">
                  Get instant notifications for <br /> your rides and be in contact <br /> with fellow riders all the time
                </p>
              </div>

              <div className="text-center mt-3">
                <div>
                  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M40.5488 33.132H38.1612V28.0159H32.6358V33.132H27.6561L35.2621 18.1247H29.3956L21.7896 33.132V38.18H32.6358V42H38.1612V38.18H40.5488V33.132Z"
                      fill="#75BF7A"
                    />
                    <path
                      d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z"
                      fill="#75BF7A"
                      stroke="#75BF7A"
                      stroke-width="0.540615"
                    />
                  </svg>
                </div>
                <h5 className="fw-bold mt-2 theme_font_bold">CASHLESS PAYMENT</h5>
                <p className="theme_font text-secondary">
                  Payment made easy by using <br /> your own Wallet - no more <br /> cash to carry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TereWorks;
