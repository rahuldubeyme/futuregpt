import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from 'react-document-meta';


class DetailPage extends Component {
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
                        <li className="breadcrumb-item"><a href="#">Browse 2000+ AI Tools</a></li>
                        <li className="breadcrumb-item"><a href="#">E-commerce</a></li>
                        <li className="breadcrumb-item"><span>Aidaptive</span></li>
                    </ol>
                </nav>
				 <div className="row mb-4">
				 <div className="col-sm-6">
				  <div className="d-flex align-items-center">
                   <h2 className="mr-3">Audyo</h2>
				   <a href="#" className="btn btn_man">Visit <i className="las la-share-square"></i></a>
				   <div className="ratting_box1 ratting_box2 ml-4">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>1 reviews</span>
				</div> 
				 </div>
				 </div>
				 <div className="col-sm-6 text-sm-right">
				 <div className="d-inline-flex align-items-center">
                  <a href="#" className="btn border_brn mr-3"><i className="s_color las la-bookmark"></i> 30</a>
                  <a href="#" className="shair_btn"> <img src="assets/img/share.svg" alt="share" class="h24" /></a>
				 </div>
				 </div>
			     
			    </div>
				<b className="hadding_b">Product Information</b>
				
				
				 <div className="row mb-4 mt-3">
				
				 <div className="col-md-5 ">
				 <div className="dital_img">
				 <div className="dital_img1">
                  <a href="#" className=""><span className="m-auto"> Visit Website</span></a>
                 <img src="assets/img/img1.webp" alt="img1" className="img-fluid"/>
                
				 </div>
				 </div>
				 </div>
				 
				  <div className="col-md-7">
				 <p className="mb-4">Create audio like writing a doc</p>
				 <p className="mb-2"><i className="s_color las la-check-circle"></i> The Futurepedia team has used this tool and recommends it.</p>
				 <p className="mb-2"><i className="s_color las la-calendar-alt"></i> Added on March 2</p>
				
				 <span className="ff"><i class="s_color las la-lock"></i> Free Trial</span><br/>
				 
				 <button className="btn_d mt-3" data-toggle="modal" data-target="#SuggestEdit"><i className="s_color las la-pencil-alt"></i> Suggest Edit</button>
				 </div>
			     
			    </div>
<div id="SuggestEdit" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
	  <h4 className="modal-title">Suggest Edit</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
        <p>Feel free to <a href="#">contact us</a> if you are associated with the tool and would like to make further changes.</p>
		<div className="mb-3 mt-4">
		<input  id="outlined-basic" name="personEmail" placeholder="Email address (Optional) " type="text" className="form-control" value="" />
		</div>
		<div className="mb-3">
		<textarea className="form-control" rows="5" placeholder="Please suggest any edits to the tool's description, pricing or features. Thank you for contributing to the community!"></textarea>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn " data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn1">Suggst</button>
      </div>
    </div>

  </div>
</div>    
	
	 <div className="row mb-4 mt-3">
	 <div className="col-md-8 col-lg-9 pr-md-5">

	<b className="hadding_b">Description</b>
           <div className="mt-2">
    <p className=""><strong>Audyo</strong> is an AI-powered tool designed to create and edit human-like voices by typing. Key features and advantages include:</p>
    <ul className="d_list">
        <li className="">
            <div className="">
                <span className=""><strong>Easy audio creation</strong>: Generate high-quality audio content by simply editing words, rather than manipulating waveform data</span>
            </div>
        </li>
        <li className="">
            <div className="">
                <span className="">
                    <strong>Customization</strong>: Switch speakers and tweak pronunciations using phonetics for greater control over the resulting audio
                </span>
            </div>
        </li>
        <li className="">
            <div className="">
                <span className=""><strong>Convenience</strong>: Access Audyo through sign-in with Google for a seamless user experience</span>
            </div>
        </li>
    </ul>
    <p className=""><strong>Use cases</strong> for Audyo are ideal for various content creators:</p>
    <ul className="d_list">
        <li className="">
            <div className="">
                <span className=""><strong>Podcasters</strong> seeking to incorporate high-quality audio without advanced editing skills</span>
            </div>
        </li>
        <li className="">
            <div className="">
                <span className=""><strong>Video producers</strong> looking to add voiceovers or narration with minimal effort</span>
            </div>
        </li>
        <li className="">
            <div className="">
                <span className=""><strong>Marketers</strong> aiming to create engaging audio content for promotional purposes</span>
            </div>
        </li>
    </ul>
    <p className="">Overall, Audyo offers a streamlined solution for generating high-quality audio content without the need for extensive audio editing expertise.</p>
</div>


</div>














    <div className="col-md-4 col-lg-3">
	<b className="hadding_b">Categories</b>
	
	<div className="categories_list mt-4">
	<a href="">Browse 29 AI e-commerce tools.</a>
	<a href="">Browse 76 AI sales tools.</a>
	<a href="">Browse 29 AI e-commerce tools.</a>
	<a href="">Browse 76 AI sales tools.</a>
	
	</div>
	<a class="op_05" href="">View All Categories</a>
	</div>
	</div>
	
	<b className="hadding_b">Aidaptive Reviews</b>
	<div className="mt-2 aidaptive_box mb-4">
	<div className="row align-items-center">
	<div className="col-md-7">
	<h6>What do you think about Aidaptive ?</h6>
	<p>Leave a review for the community</p>
	</div>
	 <div className="aidaptive_ratting text-right col-md-5">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i>
				</div> 
	</div>
	</div>
	
	<div className="row ">
	<div className="col-md-6">
	 <div className="ratting_box1 ratting_box2  mb-4">
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star"></i> 
				   <i className="las la-star-half"></i> 
				   <span>1 reviews</span>
				</div> 
				
	    <div className="rattings">
	        <div className="d-flex r_11 align-items-center">
		 		   <span>5</span>
				   <span> <i className="las la-star"></i> </span>
				   <span><div className="progress">
				     <div className="progress-bar" style={{ width: "100%" }} /></div>
				    </span>
				  <span>100%</span>
			</div> 
<div className="d-flex r_11 align-items-center">
		 		   <span>4</span>
				   <span> <i className="las la-star"></i> </span>
				   <span><div className="progress">
				     <div className="progress-bar" style={{ width: "0%" }} /></div>
				    </span>
				  <span>0%</span>
			</div> 
<div className="d-flex r_11 align-items-center">
		 		   <span>3</span>
				   <span> <i className="las la-star"></i> </span>
				   <span><div className="progress">
				     <div className="progress-bar" style={{ width: "0%" }} /></div>
				    </span>
				  <span>0%</span>
			</div> 
<div className="d-flex r_11 align-items-center">
		 		   <span>2</span>
				   <span> <i className="las la-star"></i> </span>
				   <span><div className="progress">
				     <div className="progress-bar" style={{ width: "0%" }} /></div>
				    </span>
				  <span>0%</span>
			</div> 
<div className="d-flex r_11 align-items-center">
		 		   <span>1</span>
				   <span> <i className="las la-star"></i> </span>
				   <span><div className="progress">
				     <div className="progress-bar" style={{ width: "0%" }} /></div>
				    </span>
				  <span>0%</span>
			</div> 			
					</div>
					</div>
					
				<div className="col-md-6">
				<b className="">Alternative AI Tools for Audyo</b>
						<div className="ratting_box1 ratting_box2  mb-4">
					   <i className="las la-star"></i> 
					   <i className="las la-star"></i> 
					   <i className="las la-star"></i> 
					   <i className="las la-star"></i> 
					   <i className="las la-star"></i> 
					  </div> 
					  
					  <p>The seamless integration with platforms like Shopify and Salesforce, combined with white glove partner support, makes it an invaluable tool for any online brand seeking to enhance customer experience.</p>
					
					<div className="d-flex align-items-center mt-4 pb-3">
					   <span>22 Apr</span>
					    <a href="#" className="shair_btn ml-5"> <img src="assets/img/share.svg" alt="share" className="h15" /></a>
						 <span className="ml-auto"><i className="las la-thumbs-up"></i> 0</span>
						 <span className="ml-4"><i className="las la-thumbs-down"></i> 0</span>
					  
			      	</div> 
					<hr/>
					
					</div>
					</div>
	
		   <div className="mt-5">
		   <div className="mb-3">
		   <b className="hadding_b">Alternative AI Tools for Audyo</b>
		   </div>
		   
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

export default DetailPage;
