import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class NewsLetter extends Component {
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

          <div className="in_page">
		 
             <div className="container">
			 <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Newsletter Issues</a></li>
                    </ol>
                </nav>
				<h3>Newsletter Archive.</h3>
				<p>Read all the past newsletters I have sent here.</p>
			
			   <div className="row mt-4">
              <div className="col-md-4 col-12 mb-4">

                <div className="box_item">
                	<div className="p-3">
				<div className="hadding_box text-center ">
                  <h5>Discover useful new AI tools.</h5>
                </div>
				 <p className="text-center h6 mt-4 mb-5">Join 90,000+ AI enthusiasts getting weekly updates on new tools.</p>
				 <input type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email" />
				<div className=" mt-4">
              
				  <a href="" className="btn btn1 w100">Subscribe</a>
				  <p className="mt-4 text-center">Unsubscribe at any time.</p>
				</div>
				</div>
				</div>
                </div>
               <div className="col-md-4 col-12 mb-4">
                <div className="box_item">
                <div className="box_itemimg">
                  <img src="assets/img/shuffll.webp" alt="img1" className="img-fluid"/>
                </div>
				<div className="p-3">
				<div className="hadding_box ">
                  <h5>Cool AI Tools of the Week - ChatGPT Website Builder & More!</h5>
                </div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" class="btn btn1 w100"><i class="las la-share-square"></i></a>
				</div>
				<div className="col-6 text-center">
				  <a href="" class="btn">24 Mar 2023</a>
				</div>
				</div>
				</div>
                </div>
              </div>
			  <div className="col-md-4 col-12 mb-4">
                <div className="box_item">
                <div className="box_itemimg">
                  <img src="assets/img/shuffll.webp" alt="img1" className="img-fluid"/>
                </div>
				<div className="p-3">
				<div className="hadding_box ">
                  <h5>Cool AI Tools of the Week - ChatGPT Website Builder & More!</h5>
                </div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" class="btn btn1 w100"><i class="las la-share-square"></i></a>
				</div>
				<div className="col-6 text-center">
				  <a href="" class="btn">24 Mar 2023</a>
				</div>
				</div>
				</div>
                </div>
              </div>
             </div>
		  
			
			
			
			</div> </div>     
</div>
        <Footer />
        </DocumentMeta>
      </div>
    );
  }
}

export default NewsLetter;
