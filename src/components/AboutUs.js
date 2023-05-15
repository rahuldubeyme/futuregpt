import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class AboutUs extends Component {
  render() {
    const meta = {
      title: ' ',
      description: "",
      canonical: '',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    };
    return (
      <div>
      <DocumentMeta {...meta}>
        <div>
          <Nav />

          <div className="privacy_policy">
            <div className="container">
              <h2>About Us</h2>
              <p>
                Exchange is the next-gen cryptocurrency exchange that empowers
                digital asset users with an all-engulfing trading environment.
                It makes the buying and selling of crypto coin way more
                effective and profitable as well. From involving a large number
                of coins to executing voluminous orders, this platform takes
                care of everything. It also includes a large bevy of coins that
                gives multiple opportunities to the traders to earn profits.
                  Exchange takes crypto trading to a whole new level of performance
                and functionality.
              </p>
              <p>
                Our effort to make   Exchange an India’s most secure exchange. We
                work hard to ensure a highly secured and user friendly trading
                platform for the traders and users in India.
              </p>
              <p>
                Top of the line identity verification systems process your KYC
                within a few hours of signing up, while ensuring the right KYC
                protocol. We’re building in robustness to sharply reduce
                verification times.
              </p>
              <p>
                Exchange can handle Millions of transactions. Our system
                infrastructure can scale up in a few seconds to match surging
                demand.
              </p>
            </div>
          </div>
        </div>
        <Footer />
        </DocumentMeta>
      </div>
    );
  }
}

export default AboutUs;
