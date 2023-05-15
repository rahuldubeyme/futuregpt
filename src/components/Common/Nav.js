import React from "react";
// import Logo from "../../img/logo2.png";
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { Link } from "react-router-dom";
import * as myConstList from "./BaseUrl";
import axios from "axios";
const baseUrl = myConstList.baseUrl;
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      checked: true,
      Nickname: "",
      Firstname: "",
      Email: "",
    };

    this.getData();
  }

  componentWillMount() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", false);
    }

    var theme = localStorage.getItem("theme");
    if (theme == null) {
      theme = false;
    }
    if (theme == "true" || theme == "false") {
      theme = JSON.parse(theme);
      this.handleChange(theme);
    }
  }
  getData = () => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    
    
  };
  
  showHeaderPart = () => {
    const signup  = (res) => {
    
      // const googleresponse = {
  
      //   fullName: "res.profileObj.name"",
  
      //   email: res.profileObj.email,
  
      //   token: res.googleId,
  
      //   Image: res.profileObj.imageUrl,
  
      //   ProviderId: 'Google'
  
  
      // };
      const googleresponse = {
        fullName :"testing",
        email:"testing@yopmail.com"
      }
  
  //    debugger;
  
      axios.post(baseUrl+'/auth/login', googleresponse)
  
        .then((result) => {
  
          let responseJson = result;
          console.log("result======>>>", result.data.data.token)
          localStorage.setItem('token',result.data.data.token);
          sessionStorage.setItem("userData", JSON.stringify(result));
          console.log("JSON.stringify(result)", JSON.stringify(result))
  
          this.props.history.push('/')
  
        });
  
    };
    var token = localStorage.getItem("token");
    const responseGoogle = (response) => {
    
      console.log(response);

      //var res = response.profileObj;

      //console.log(res);

      //debugger;
      console.log("googleres",response)
      //this.signup(response);

    }
    const handleoutSuccess = (res) =>{
      console.log("logout res", res)
    }
    
    if (token === null) {
      return (
        <ul className="ml-md-4">
          <li className="">

          {/* <GoogleLogin

                clientId="848903582084-oami37030qddk31ke49uto2bbr8ssvk1.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin> */}
                {/* <GoogleLogout clientId='848903582084-oami37030qddk31ke49uto2bbr8ssvk1.apps.googleusercontent.com' buttonText='logout' onLogoutSuccess={handleoutSuccess}></GoogleLogout> */}
            <Link to="#" className="d-flex" onClick={signup}>Login</Link>
          </li>
        </ul>
      );
    }else{
      return (
        <ul className="ml-md-4">
          <li className="">
            <Link to="#" className="d-flex" onClick={signup}>Logout</Link>
          </li>
        </ul>
      );
    }
  };
  logout = () => {
    var theme = localStorage.getItem("theme");
    localStorage.clear();
    localStorage.setItem("theme", theme);
    sessionStorage.clear();
  };
  handleChange = (checked) => {
    let tags = document.getElementsByTagName("body");
    if (checked === false) {
      tags[0].classList.add("dark-theme");
      this.setState({ checked: true });
    } else {
      tags[0].classList.remove("dark-theme");
      this.setState({ checked: false });
    }
    localStorage.setItem("theme", checked);
  };
  render() {
    var token = localStorage.getItem("token");
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand navbar-brand2" to="/">
            <img src="/assets/img/logo.png" alt="Logo" className="logo logo1" />
            <img src="/assets/img/favicon.png" alt="Logo" className="logo logo2" />
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarText">
            <span className="icon-bar">
              <i className="fa fa-bars fa-2x"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav  line align-items-center">
             
			  <li className="nav-item">
                  <Link className="nav-link " to="/favourites">
                    Favourites
                  </Link>
				  </li>
				   <li className="nav-item">
              
                  <Link className="nav-link " to="/discover">
                    Discover
                  </Link>
              </li> 
              <li className="nav-item dropdown"><Link className="nav-link " data-toggle="dropdown" to="">Submit</Link>
			   <div className="dropdown-menu">
				<a className="dropdown-item" href="submit-tool"><i className="las la-tools"></i> Submit Tool</a>
				<a className="dropdown-item" href="submit-news"><i className="las la-newspaper"></i> Submit News</a>
			  </div>
			  </li>
			  <li className="nav-item dropdown"><Link className="nav-link" data-toggle="dropdown" to="">Community</Link>
			   <div className="dropdown-menu">
				<a className="dropdown-item" href="news-letter"> Newsletter Issues</a>
				<a className="dropdown-item" href="latest-ai-news"> Latest AI News</a>
			  </div>
			  </li>
			   <li className="nav-item">
                  <Link className="nav-link " to="#">
                    <i className="lab la-gratipay s_color"></i> Sponsor Us
                  </Link>
				  </li>
              
            </ul>
           
          </div>
		  <span className="ml-auto">
                {this.state.checked == false ? (
                  <img
                    src="/assets/img/sun.png"
                    alt=""
                    width="25px"
                    className="sun-img theme-img"
                    onClick={() => this.handleChange(this.state.checked)}
                    checked={this.state.checked}
                  />
                ) : (
                  <img
                    src="/assets/img/moon.png"
                    width="25px"
                    alt=""
                    className="moon-img theme-img"
                    onClick={() => this.handleChange(this.state.checked)}
                    checked={this.state.checked}
                  />
                )}
              </span>
          <div className="dashbord_menu">
            {this.showHeaderPart()}
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
