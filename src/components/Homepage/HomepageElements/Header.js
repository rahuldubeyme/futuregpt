import React from "react";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";
import * as myConstList from "../../Common/BaseUrl";
import axios from "axios";
const baseUrl = myConstList.baseUrl;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      checked: true,
      catlist :""
    };

    this.getData();
  }

  getData = () => {
    console.log("localStorage.getItem",localStorage.getItem("token"))
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Authorization": localStorage.getItem("token"),
      },
    };
    
    axios.get(baseUrl + "/category/list", {}, config).then((resp) => {
      //var resp = resp.data;

      console.log("resp==========>>",resp)
      if(resp.data.data.length > 0){
        this.setState({
          catlist:resp.data
        });
        console.log("set data", this.state.catlist)
      }
    });
  };
  responseHtml = () => {
    console.log("this.state.catlist", this.state.catlist)
    if (this.state.catlist.success === true) {
      let html = '';
      console.log("this.state.catlist.data", this.state.catlist.data)
      this.state.catlist.data.map(async function (value, i) {
        console.log("this.state.catlist============", value.title)
          html += '<button className="f_box2 btn">'+value.title+'</button>';	
      })
      return (html);
      
    }
    
  }
  render() {
    const meta = {
      title: "",
      description:
        "",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "",
        },
      },
    };
    const cat = this.state.catlist.data;
    // const list = cat.map(async function (value, i) {console.log("sedrerr",value.title)})
     console.log("cat=====>>>", cat);
    return (
      <DocumentMeta {...meta}>
        <header className="home" id="home">
          <div className="container">
            <div className="home-outer text-center">
                   {/* <h1>
                     FutureGPT
                    </h1>
                    <p>
                     THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY           </p>
                    <div className="banner-btn-outer mt-4">
                      <Link to="/exchange/BTC/INR" className="btn">
                        <i className="las la-tools"></i> Tools Added Today
						<span className="btn_number">10</span>
                      </Link>
					   <Link to="/exchange/BTC/INR" className="btn">
                        <i className="las la-newspaper"></i> News Added Today
						<span className="btn_number">10</span>
                      </Link>               
                     </div>*/}
					
				   <div className="add_box ">
				    <img src="/assets/img/addbanner.jpg" alt="Logo" className="img-fluid" />
				   </div>
				   <div className="search_box mt-4">
                     <input type="search" placeholder="Search 1457 AI tools and 50 categories" />  
                      <i className="las la-search"></i>					 
                   </div>
				   
				  
				   <div className="filter_box mt-4 row align-items-center">
                    <div className="col-md-2"> 
                    <button className="f_box1 btn"> 
					 Filter <i className="las la-filter"></i>
                   </button>				   
                   </div>	
                   <div className="col-md-8"> 
                   
                   </div>

                   <div className="col-md-2"> 
                    <button className="f_box1 btn " data-toggle="dropdown"> 
					<span className="sort_by">Sort By</span>
					<i className="las la-check-circle"></i> Verified
                   </button>
				   
                   </div>				   
                   </div>
				   
				    <p className="view_all_item mt-3">
				   VIEW ALL CATEGORIES
				   </p>
            </div>
          </div>
        </header>
      </DocumentMeta>
    );
  }
}

export default Header;
