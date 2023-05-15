import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class Faq extends Component {
  render() {
    const meta = {
      title: '',
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
          <div className="privacy_policy faqq">
            <div className="container">
            
              <div className="row">
                <div className="col-md-1"></div>

                <div className=" col-md-10 col-xs-12 ">
                <h1 className="mb-3">Frequently Asked Questions</h1>
                  <div
                    className="accordion md-accordion style-2"
                    id="accordionEx"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne1">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseOne1"
                          aria-expanded="false"
                          aria-controls="collapseOne1"
                          className="collapsed"
                        >
                          What digital currency trading pairs are available on
                          Avonex  Exchange Exchange?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>

                      <div
                        id="collapseOne1"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne1"
                        data-parent="#accordionEx"                       
                      >
                        <div className="card-body">
                          Avonex  Exchange Exchange supports trading for Bitcoin,
                          Ethereum, TRON, ACEX, USDT. All digital currencies can
                          be traded against Bitcoin.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo2">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          Is Avonex  Exchange Exchange free to join?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo2"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo2"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          All verified Avonex  Exchange customers are able to access
                          Exchange for free.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo3">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo3"
                          aria-expanded="false"
                          aria-controls="collapseTwo3"
                        >
                          How do I transfer funds into my Avonex  Exchange Exchange
                          account to begin trading?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo3"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo3"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          Since Avonex  Exchange Exchange is connected directly to
                          Avonex  Exchange, all transfers into Avonex  Exchange Exchange are made
                          directly from your existing Avonex  Exchange account.
                          <br />
                          Avonex  Exchange accepts Bitcoin,Ethereum,
                          TRON, ACEX, USDT payments. These funds can then be
                          sent to Avonex  Exchange Exchange instantly by initiating a new
                          transfer within Avonex  Exchange Exchange itself.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo4">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo4"
                          aria-expanded="false"
                          aria-controls="collapseTwo4"
                        >
                          What is your refund policy?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo4"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo2"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          {" "}
                          Refunds cannot be offered for finalised trades or
                          Avonex  Exchange Exchange subscriptions. If you believe an
                          error has occurred during a trade, please contact
                          Avonex  Exchange Support.
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo6">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo6"
                          aria-expanded="false"
                          aria-controls="collapseTwo6"
                        >
                          Where can I find more information about Avonex  Exchange
                          Exchange?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo6"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo6"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          {" "}
                          For detailed technical information, please refer to
                          the official Avonex  Exchange Exchange website.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo7">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo7"
                          aria-expanded="false"
                          aria-controls="collapseTwo7"
                        >
                          What are taker, maker and VIP trades?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo7"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo7"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          <p>
                            When you place an order and it is immediately
                            filled, it is a taker trade since you are removing
                            liquidity from the order book. Trading fees will
                            apply.
                          </p>

                          <p>
                            {" "}
                            When it is not immediately filled, it is a maker
                            trade, since you are adding liquidity to the order
                            book.
                          </p>
                          <p>
                            When you place a limit order, it is possible to
                            select "Maker or cancel" time in force setting to
                            ensure that there are no trading fees.
                          </p>
                          <p>
                            VIP trades are zero fee trades for a particular
                            point of time where an user buys a VIP package to
                            trade without any fees applied. The VIP packages are
                            mentioned in the VIP customers column. Please refer
                            to VIP customers know more about VIP packages.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo8">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo8"
                          aria-expanded="false"
                          aria-controls="collapseTwo7"
                        >
                          Why am i not getting any confirmation mail to my email
                          box?
                          <i className="fa fa-caret-down rotate-icon"></i>
                        </a>
                      </div>
                      <div
                        id="collapseTwo8"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo8"
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          <p>
                            Sometimes these mails go to promotion & spam folders
                            so please check all these folders to get your mail
                            confirmed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </DocumentMeta>
        <Footer />
      </div>
    );
  }
}

export default Faq;
