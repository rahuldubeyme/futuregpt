import React from "react";
import qr from "../../../img/qr.jpg";

class Appss extends React.Component {
  render() {
    return (
      <div className="appss p60 pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="appss-content">
                <div className="section-heading">
                  <h2 className="mb-0">
                    <b>Trade on the go. Anywhere, anytime.</b>
                  </h2>
                  <p>
                    <b>Stay in the know with our app and desktop client.</b>
                  </p>
                  <p className="mt-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <ul className="trade-list-outer">
                  <li className="text-center">
                    <a href="javascript:void(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="app_Store"
                          data-name="app Store"
                          transform="translate(-376 -3595)"
                        >
                          <rect
                            id="app_407"
                            data-name="app 407"
                            width="32"
                            height="32"
                            transform="translate(376 3595)"
                            fill="none"
                          ></rect>
                          <path
                            id="ios"
                            d="M116.24,16.534a7.043,7.043,0,0,1,3.359-5.925,7.268,7.268,0,0,0-5.69-3.084c-2.423-.245-4.728,1.427-5.958,1.427s-3.124-1.391-5.134-1.354a7.611,7.611,0,0,0-6.436,3.9c-2.744,4.762-.7,11.816,1.972,15.678,1.307,1.89,2.866,4.013,4.912,3.937,1.97-.079,2.716-1.275,5.1-1.275s3.051,1.275,5.137,1.236c2.12-.04,3.464-1.926,4.762-3.823a17.141,17.141,0,0,0,2.155-4.425,6.872,6.872,0,0,1-4.176-6.294ZM112.322,4.969A6.856,6.856,0,0,0,113.941,0a6.981,6.981,0,0,0-4.583,2.356,6.521,6.521,0,0,0-1.652,4.814,5.773,5.773,0,0,0,4.616-2.2Z"
                            transform="translate(284.527 3595.441)"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                      <p className="m-0">App Store</p>
                    </a>
                  </li>

                  <li className="text-center">
                    <a href="javascript:void(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Google_play"
                          data-name="Google play"
                          transform="translate(-678 -3595)"
                        >
                          <g
                            id="google_play-2"
                            data-name="google play"
                            transform="translate(655.107 3578.94)"
                          >
                            <path
                              id="google_39"
                              data-name="google 39"
                              d="M58.2,123.149l12.285-6.779L67.767,113.6Z"
                              transform="translate(-27.415 -78.28)"
                              fill="#fff"
                            ></path>
                            <path
                              id="google_40"
                              data-name="google 40"
                              d="M129.683,82.57,125.4,80.2l-4.5,4.461,3.119,3.172,5.646-3.1a1.222,1.222,0,0,0,.523-1.655A1.019,1.019,0,0,0,129.683,82.57Z"
                              transform="translate(-79.189 -50.7)"
                              fill="#fff"
                            ></path>
                            <path
                              id="google_41"
                              data-name="google 41"
                              d="M53.183,28.489,35.6,18.8,49.105,32.566Z"
                              transform="translate(-8.753)"
                              fill="#fff"
                            ></path>
                            <path
                              id="google_42"
                              data-name="google 42"
                              d="M25,24.2V50.409a1.231,1.231,0,0,0,.784,1.15L38.993,38.385Z"
                              transform="translate(0 -4.459)"
                              fill="#fff"
                            ></path>
                          </g>
                          <rect
                            id="google_409"
                            data-name="google 409"
                            width="32"
                            height="32"
                            transform="translate(678 3595)"
                            fill="none"
                          ></rect>
                        </g>
                      </svg>
                      <p className="m-0">Google Play</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="appss-img">
                <img
                  src="assets/img/download.png"
                  alt="app222"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appss;
