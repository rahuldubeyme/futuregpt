import React from "react"
import {Component} from "react"

export class NotFound extends Component{
    render(){
        return(<div>
          <div className="not_found">
			  <div>
				 <img src="/assets/img/not_found.png" className="img-fluid"/>
				  <h1 className="mt-4">OOPS! PAGE NOT FOUND</h1>
				 <a className="btn btn_man mt-4  w100px mt-4" href="/">Go Home</a>
			  </div>
		  </div>
        </div>)
    }
}

export default NotFound;