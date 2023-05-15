import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class LatestAiNews extends Component {
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
                        <li className="breadcrumb-item"><a href="#">News</a></li>
                    </ol>
                </nav>
				 <div className="mb-4">
                   <h3 className="mr-3">Latest AI News | All Time</h3>
                   <p className="mb-3">349 News.</p>
				   
			<a href="/submit-news" className="btn btn1"><i className="las la-plus"></i> Submit</a>
			     
			    </div>
				<div className="filter_box mt-4 mb-4 row align-items-center">
					<div className="col-md-2">
					<label>Filter By Time</label>
					
					   <button className="f_box1 btn">
						<i className="las la-filter"></i> All Items
						</button>
					</div>
					<div className="col-md-2">
					<label>Filter by Category</label>
					   <button className="f_box1 btn">
						<i className="las la-newspaper"></i> All
						</button>
					</div>
					<div className="col-md-2 ml-auto">
					
					<label>Sort By</label>
					   <button className="f_box1 btn">
						<i className="las la-clock"></i> New
						</button>
					</div>
				</div>
				
				<div className="border_box mb-3 ">
				<a href="">Google is putting AI in the workspace suite <i className="las la-star"></i></a>
					<div className="row mt-3">
					<div className="col-auto">
					submitted by Futurepedia Staff<br/>
					<b>21 days ago</b>
					
					</div>
					<div className="col-auto mld-4">
					<small className="small_btn"><i className="las la-calendar-alt"></i> Updates</small>
					</div>
					<div className="col-auto ml-auto">
					<a href="#" class="btn border_brn mr-3"><i class="las la-bookmark"></i> 2</a>
					
					</div>
				</div>
				</div>
				
				<div className="border_box mb-3 ">
				<a href="">Google is putting AI in the workspace suite <i className="las la-star"></i></a>
					<div className="row mt-3">
					<div className="col-auto">
					submitted by Futurepedia Staff<br/>
					<b>21 days ago</b>
					
					</div>
					<div className="col-auto ml-4">
					<small className="small_btn"><i className="las la-calendar-alt"></i> Updates</small>
					</div>
					<div className="col-auto ml-auto">
					<a href="#" class="btn border_brn mr-3"><i class="las la-bookmark"></i> 2</a>
					</div>
				</div>
				</div>
				<div className="border_box mb-3 ">
				<a href="">Google is putting AI in the workspace suite <i className="las la-star"></i></a>
					<div className="row mt-3">
					<div className="col-auto">
					submitted by Futurepedia Staff<br/>
					<b>21 days ago</b>
					
					</div>
					<div className="col-auto mld-4">
					<small className="small_btn"><i className="las la-calendar-alt"></i> Updates</small>
					</div>
					<div className="col-auto ml-auto">
					<a href="#" class="btn border_brn mr-3"><i class="las la-bookmark"></i> 2</a>
					
					</div>
				</div>
				</div>
				
				<div className="border_box mb-3 ">
				<a href="">Google is putting AI in the workspace suite <i className="las la-star"></i></a>
					<div className="row mt-3">
					<div className="col-auto">
					submitted by Futurepedia Staff<br/>
					<b>21 days ago</b>
					
					</div>
					<div className="col-auto ml-4">
					<small className="small_btn"><i className="las la-calendar-alt"></i> Updates</small>
					</div>
					<div className="col-auto ml-auto">
					<a href="#" class="btn border_brn mr-3"><i class="las la-bookmark"></i> 2</a>
					</div>
				</div>
				</div>
				
 </div>
          </div>
        </div>
        <Footer />
        </DocumentMeta>
      </div>
    );
  }
}

export default LatestAiNews;
