import React from "react";
import icon1 from "../../../img/icon1.png";
import icon1_h from "../../../img/icon1-h.png";
import icon2 from "../../../img/icon2.png";
import icon2_h from "../../../img/icon2-h.png";
import icon3 from "../../../img/icon3.png";
import icon3_h from "../../../img/icon3-h.png";

class Testimonial extends React.Component {
  render() {
    return (
      <div className="how-main-outer">
        <div className="container">
          <div className="section-heading text-center">
            <h2>How It Work</h2>
          </div>
          <div className="how-outer">
            <div className="row">
              <div className="col-md-3 col-12">
                <div className="how-inner ">
                  <div className="img-outer">
                    <img src="assets/img/Cloud.png" alt="" className="img-fluid"/>
                  </div>
                  <div className="content-outer">
                    <small>STEP 1</small>
                    <h3>Download</h3>
                    <p>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="how-inner ">
                  <div className="img-outer">
                    <img src="assets/img/Wallet.png" alt="" className="img-fluid"/>
                  </div>
                  <div className="content-outer">
				  <small>STEP 2</small>
                    <h3>Connect Wallet</h3>
                    <p>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="how-inner ">
                  <div className="img-outer">
                    <img src="assets/img/Mining.png" alt="" className="img-fluid"/>
                  </div>
                  <div className="content-outer">
				  <small>STEP 3</small>
                    <h3>Start Trading</h3>
                    <p>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                  </div>
                </div>
              </div>
			  <div className="col-md-3 col-12">
                <div className="how-inner ">
                  <div className="img-outer">
                    <img src="assets/img/Comparison.png" alt="" className="img-fluid"/>
                  </div>
                  <div className="content-outer">
				  <small>STEP 4</small>
                    <h3>Earn Money</h3>
                    <p>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
