import React from "react";
import { Link } from "react-router-dom";

const Trade = () => {
  var token = localStorage.getItem("token")
  return (
    <div className="trade-main-outer">
      <div className="container">
        <div className="trade-outer text-center">
          <div className="logo-outer">
            <img src="/assets/img/logo2.png" alt="" className="" />
          </div>
          <h3>
            <b>Start earning today</b>
          </h3>
          <div className="trade-btn-outer d-flex flex-wrap justify-content-between mx-auto">
            {/* <a href='javascript:void(0)' className='btn btn-primary'>Register Now</a> */}
            <Link
              to={!token && "/register-for-bitcoin-exchange"}
              className="btn btn-primary"
            >
              Register Now
            </Link>
            {/* <a href='javascript:void(0)' className='btn btn-primary'>Trade Now</a> */}
            <Link to="/exchange/BTC/USDT" className="btn btn-primary">
              Trade Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
