import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as myConsList from "../../Common/BaseUrl";

const baseUrl = myConsList.baseUrl;

export class HomeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive:false,
	  toolList:"",
    };
	this.getData();
  }
  componentWillMount() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", false);
    }

   
  }
  getData = () => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    axios.get(baseUrl + "/tool/list", {}, config).then((resp) => {
		//var resp = resp.data;
  
		console.log("resp==========>>",resp)
		if(resp.data.data.length > 0){
			console.log("toolres data", resp.data)
		  this.setState({
			toolList:resp.data
		  });
		  console.log("set data", this.state.toolList)
		}
	  });
    
  };


  changeClass = () => {
    this.setState({isActive:!this.state.isActive})
  }
  render() {
    return (
      <div className="p60 intro-main-outer" id="token" data-scroll-index="3">
        <div className="container">
          <div className="intro-outer">
            <div className="row">
				
              <div className="col-md-4 col-12 mb-4">
				
                <div className="box_item">
                <div className="box_itemimg">
                  <img src="assets/img/img1.webp" alt="img1" className="img-fluid"/>
                </div>
				<div className="p-3">
				<a href="detail">
				<div className="hadding_box d-flex ">
                  <h5>Piggy Quiz Maker<i className="las la-check-circle ml-2"></i> </h5>
				  <span className="ml-auto"><i className="las la-heart"></i> 1331</span>
                </div>
				<div className="ratting_box1">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>(2)</span>
				</div> 
				<p className="mb-3 item_content ">The wonders of the AI quiz maker! With just a prompt, this marvelous tool can create a stunning quiz consisting of 7-10 visually appealing questions that are perfectly optimized for mobile devices. </p>
                   </a>           
			   <div className="hadding_box2">
				<span className="ff"><i className="las la-lock"></i> Free Trial</span>
				</div>
				<div className="has_item pt-3">
				  <a href="" className="has_tag mr-3">#productivity</a>
				  <a href="" className="has_tag mr-3">#summarizer</a>
				</div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" className="btn btn1 w100"><i className="las la-share-square"></i></a>
				</div>
				<div className="col-6">
				  <a href="" className="btn btn_border w100"><i className="lab la-gratipay"></i></a>
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
				<a href="detail">
				<div className="hadding_box d-flex ">
                  <h5>Piggy Quiz Maker<i className="las la-check-circle ml-2"></i> </h5>
				  <span className="ml-auto"><i className="las la-heart"></i> 1331</span>
                </div>
				<div className="ratting_box1">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>(2)</span>
				</div> 
				<p className="mb-3 item_content ">The wonders of the AI quiz maker! With just a prompt, this marvelous tool can create a stunning quiz consisting of 7-10 visually appealing questions that are perfectly optimized for mobile devices. </p>
                   </a> 
				<div className="hadding_box2">
				<span className="ff"><i className="las la-lock"></i> Free Trial</span>
				</div>
				<div className="has_item pt-3">
				  <a href="" className="has_tag mr-3">#productivity</a>
				  <a href="" className="has_tag mr-3">#summarizer</a>
				</div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" className="btn btn1 w100"><i className="las la-share-square"></i></a>
				</div>
				<div className="col-6">
				  <a href="" className="btn btn_border w100"><i className="lab la-gratipay"></i></a>
				</div>
				</div>
				</div>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
				   <div className="box_item">
					  <div className="p-3">
						 <div className="hadding_box text-center mt-4">
							<h5>Discover useful new AI tools.</h5>
						 </div>
						 
						 <p className="text-center h6 mt-5 mb-5">Join 90,000+ AI enthusiasts getting weekly updates on new tools.</p>
						 <input type="email" className="form-control" name="fields[email]" placeholder="Email" autocomplete="email"/>
						 <div className="mt-3 text-center">
							<button type="submit" className="btn btn2 w100">Subscribe</button>
							<p className="mt-4 text-center uat">Unsubscribe at any time.</p>
							<a href="" className="a_link tdu ">Read past issues <i className="las la-angle-right"></i></a>
						 </div>
					  </div>
				   </div>
				</div>
			  <div className="col-md-4 col-12 mb-4">
                <div className="box_item">
                <div className="box_itemimg">
                  <img src="assets/img/magicform.webp" alt="img1" className="img-fluid"/>
                </div>
				<div className="p-3">
				<a href="detail">
				<div className="hadding_box d-flex ">
                  <h5>Piggy Quiz Maker<i className="las la-check-circle ml-2"></i> </h5>
				  <span className="ml-auto"><i className="las la-heart"></i> 1331</span>
                </div>
				<div className="ratting_box1">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>(2)</span>
				</div> 
				<p className="mb-3 item_content ">The wonders of the AI quiz maker! With just a prompt, this marvelous tool can create a stunning quiz consisting of 7-10 visually appealing questions that are perfectly optimized for mobile devices. </p>
                   </a>  <div className="hadding_box2">
				<span className="ff"><i className="las la-lock"></i> Free Trial</span>
				</div>
				<div className="has_item pt-3">
				  <a href="" className="has_tag mr-3">#productivity</a>
				  <a href="" className="has_tag mr-3">#summarizer</a>
				</div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" className="btn btn1 w100"><i className="las la-share-square"></i></a>
				</div>
				<div className="col-6">
				  <a href="" className="btn btn_border w100"><i className="lab la-gratipay"></i></a>
				</div>
				</div>
				</div>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">

                <div className="box_item">
                <div className="box_itemimg">
                  <img src="assets/img/img1.webp" alt="img1" className="img-fluid"/>
                </div>
				<div className="p-3">
				<a href="detail">
				<div className="hadding_box d-flex ">
                  <h5>Piggy Quiz Maker<i className="las la-check-circle ml-2"></i> </h5>
				  <span className="ml-auto"><i className="las la-heart"></i> 1331</span>
                </div>
				<div className="ratting_box1">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>(2)</span>
				</div> 
				<p className="mb-3 item_content ">The wonders of the AI quiz maker! With just a prompt, this marvelous tool can create a stunning quiz consisting of 7-10 visually appealing questions that are perfectly optimized for mobile devices. </p>
                   </a>  <div className="hadding_box2">
				<span className="ff"><i className="las la-lock"></i> Free Trial</span>
				</div>
				<div className="has_item pt-3">
				  <a href="" className="has_tag mr-3">#productivity</a>
				  <a href="" className="has_tag mr-3">#summarizer</a>
				</div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" className="btn btn1 w100"><i className="las la-share-square"></i></a>
				</div>
				<div className="col-6">
				  <a href="" className="btn btn_border w100"><i className="lab la-gratipay"></i></a>
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
				<div className="hadding_box d-flex ">
                  <h5>Shuffll<i className="las la-check-circle ml-2"></i> </h5>
				  <span className="ml-auto"><i className="las la-heart"></i> 1331</span>
                </div>
				<div className="ratting_box1">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>(2)</span>
				</div> 
				<p className="mb-3 item_content">The wonders of the AI quiz maker! With just a prompt, this marvelous tool can create a stunning quiz consisting of 7-10 visually appealing questions that are perfectly optimized for mobile devices. </p>
                
				<div className="hadding_box2">
				<span className="ff"><i className="las la-lock"></i> Free Trial</span>
				</div>
				<div className="has_item pt-3">
				  <a href="" className="has_tag mr-3">#productivity</a>
				  <a href="" className="has_tag mr-3">#summarizer</a>
				</div>
				<div className="row mt-4">
                  <div className="col-6">
				  <a href="" className="btn btn1 w100"><i className="las la-share-square"></i></a>
				</div>
				<div className="col-6">
				  <a href="" className="btn btn_border w100"><i className="lab la-gratipay"></i></a>
				</div>
				</div>
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

export default HomeList;
