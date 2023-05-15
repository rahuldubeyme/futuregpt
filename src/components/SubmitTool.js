import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class SubmitTool extends Component {
  render() {
    const meta = {
      title: '# ',
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
                        <li className="breadcrumb-item"><a href="#">Submit Tool</a></li>
                    </ol>
                </nav>
				<h3>Submit your tool.<small>It's free and takes less than a minute.</small></h3>
				<form class="toll_form">
				 <div className="row ">
				   <div className="mb-3 mt-4 col-sm-6">
				    <label>Tool Name</label>
					<input  id="outlined-basic" name="personEmail" placeholder="Copy AI " type="text" className="form-control" value="" />
					</div>
					<div className="mb-3 mt-4 col-sm-6">
				    <label>Website URL</label>
					<input  id="outlined-basic" name="personEmail" placeholder="https://copy.ai" type="text" className="form-control" value="" />
					</div>
					 </div>
					 <div className="mb-3 mt-4 ">
				    <label>Tool's short description (Optional)</label>
					<input  id="outlined-basic" name="personEmail" placeholder="Please provide a short description" type="text" className="form-control" value="" />
					</div>
					<div className="mb-3">
					<label>Tool Description (Optional)</label>
					<textarea className="form-control" rows="5" placeholder="Please describe your product in 2-3 sentences."></textarea>
				  </div>
				  <button type="button" className="btn btn1">Next <i className="las la-paper-plane"></i></button>
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

export default SubmitTool;
