import React from 'react';
import Img1 from "../../../img/b1.png"
import Img2 from '../../../img/b2.png'
import Img3 from '../../../img/b3.png'
import Img4 from '../../../img/b4.png'
import Img5 from '../../../img/b5.jpg'


class Scroll extends React.Component{
    render() {
        return (
            <div className='box5 p60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <a href="#test" className='b_box'>
                                <img src={Img1} alt='img_fluid_1' className='img-fluid'/>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href="#test" className='b_box'>
                                <img src={Img2} alt='img_fluid_1' className='img-fluid'/>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href="#test" className='b_box'>
                                <img src={Img3} alt='img_fluid_1' className='img-fluid'/>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href="#test" className='b_box'>
                            <img src={Img4} alt='img_fluid_1' className='img-fluid'/>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href="#test" className='b_box'>
                                <img src={Img5} alt='img_fluid_1' className='img-fluid'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scroll;