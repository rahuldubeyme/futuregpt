import React from "react";
import axios from "axios";
import * as myConstList from "./BaseUrl";
import { Link } from "react-router-dom";

const baseUrl = myConstList.baseUrl;
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    window.scrollTo(0, 0)
  }

  
  timerId6 = () => {
    axios
      .get(baseUrl + "/frontapi/depositbtctransaction")
      .then((LiveResp) => {
        var resp = LiveResp.data;
        if (resp.status === true) {
          setTimeout(() => {
            this.timerId6();
          }, 600000);
        }
      });
  }
  reloadPage() {
    window.location.reload()
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section className="contact footer" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-6">
              <div className="nav_link">
                <ul className="">
                  <li className="">
                    <Link className="" to="">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="">Terms of Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-6">
              <div className="nav_link text-center">
                <ul>
                  <li>
                   Copyright © 2023 - Future GPT
                  </li>
                  <li>
                    <Link to=""> <i className="lab la-gratipay s_color"></i> Sponsor Us</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
       
        
            <div className="col-md-4">
              <div className="footer-social text-md-right">
                <div className="vertical-social wow fadeInDown  animated">
                  <ul>
                    
                    <li>
                      <Link target="_blank" href="f">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <a target="_blank" href="#" rel="noreferrer">
                        {" "}
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <Link target="_blank" href="r">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
					<li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="#"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    );
  }
}
export default Footer;
