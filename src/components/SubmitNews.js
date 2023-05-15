import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class SubmitNews extends Component {
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

          <div className="in_page">
		 
            <div className="container">
			 <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Submit News</a></li>
                    </ol>
                </nav>
				<h3>Submit</h3>
				<p>It's free and takes less than a minute.</p>
				<form class="toll_form mt-4">
				<div className="mb-3">
					<label>Title</label>
					<textarea className="form-control" rows="5" placeholder="Please describe the content in 1-2 sentences."></textarea>
				  </div>
				 <div className="row ">
				   <div className="mb-3 mt-4 col-sm-6">
				    <label>Link to the content</label>
					<input  id="outlined-basic" name="personEmail" placeholder="https://www.wired.com/ " type="text" className="form-control" value="" />
					</div>
					<div className="mb-3 mt-4 col-sm-6">
				    <label>Select Categories (max 2)</label>
					<input  id="outlined-basic" name="personEmail" placeholder="Please select categories that fit the tool" type="text" className="form-control" value="" />
					</div>
					 </div>
					
					
				  <button type="button" className="btn btn1">Submit <i className="las la-paper-plane"></i></button>
				  </form>
				  </div>
				  </div>
					
				
			

			     
</div>
        <Footer />
        </DocumentMeta>
      </div>
    );
  }
}

export default SubmitNews;
