import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as myConstList from "./Common/BaseUrl"
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';


const baseUrl = myConstList.baseUrl;

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailStatus:""
    };
  }

  onBlurNameChange(event) {
    var na = event.target.value;
    if (!na) {
      toast.dismiss();
      toast.error("Name is require!");
    }
  }

  onBlurEmailChange(event) {
    var ea = event.target.value;
    if (!ea) {
      toast.dismiss();
      toast.error("Email is require!");
    }
  }

  onBlurSubjectChange(event) {
    var su = event.target.value;
    if (!su) {
      toast.dismiss();
      toast.error("Subject is require!");
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    var details={
      name:this.state.name,
      email:this.state.email,
      subject:this.state.subject,
      message:this.state.message
    }
    axios.post(baseUrl + "/frontapi/sendContactMail",details).then((resp)=>{
      var resp = resp.data;
      if(resp.status === true){
        this.resetForm()
        toast.success("Mail sent successfully")
      }
    })

  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

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

          <div className="privacy_policy">
            <div className="container container2">
              <div className="wrapper mt-4">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4" />
                      <form
                        onSubmit={this.submitEmail.bind(this)}
                        method="post"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onNameChange.bind(this)}
                                onBlur={this.onBlurNameChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onEmailChange.bind(this)}
                                onBlur={this.onBlurEmailChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={this.state.subject}
                                onChange={this.onSubjectChange.bind(this)}
                                onBlur={this.onBlurSubjectChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={7}
                                placeholder="Message"
                                defaultValue={""}
                                value={this.state.message}
                                onChange={this.onMsgChange.bind(this)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                className="btn btn_man "
                                defaultValue="Send Message"
                              />
                              <div className="submitting" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg_contact w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start mb-2">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker" />
                        </div>
                        <div className="text pl-3 ">
                          <p className="mt-0">
                            <span>Address: </span>  
                             Mahendergarh,<br/>
                            Haryana PIN:- 123027
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center mb-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone" />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <Link to="tel:#">+91 9876543210 </Link>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane" />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <Link to="mailto:support@avonx.com">
                           support@avonx.com
                            </Link>
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
        <Footer />
        <ToastContainer autoClose={2000} limit={1} />
        </DocumentMeta>
      </div>
    );
  }
}

export default ContactUs;
