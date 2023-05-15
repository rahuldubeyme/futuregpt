import React from 'react'

const NeedHelp = () => {
  return (
    <div className="help-main-outer">
      <div className='container'>
        <div className='section-heading text-center'>
          <h2><b>Need help?</b></h2>
        </div>
        <div className='help-outer'>
          <div className='row'>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className='help-inner d-flex flex-wrap align-items-start position-relative'>
                <div className='img-outer'>
                  <img src='/assets/img/help-img1.png' alt='' className='img-fluid'/>
                </div>
                <div className='content-outer'>
                  <h5><b>24/7 Chat Support</b></h5>
                  <p>Get 24/7 chat support with our friendly customer service agents at your service.</p>
                  <div className='help-btn-outer'>
                    <a href='javascript:void(0)'>Chat now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className='help-inner d-flex flex-wrap align-items-start position-relative'>
                <div className='img-outer'>
                  <img src='/assets/img/help-img2.png' alt='' className='img-fluid'/>
                </div>
                <div className='content-outer'>
                  <h5><b>FAQs</b></h5>
                  <p>View FAQs for detailed instructions on specific features.</p>
                  <div className='help-btn-outer'>
                    <a href='javascript:void(0)'>Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-12'>
              <div className='help-inner d-flex flex-wrap align-items-start'>
                <div className='img-outer'>
                  <img src='/assets/img/help-img3.png' alt='' className='img-fluid'/>
                </div>
                <div className='content-outer'>
                  <h5><b>Blog</b></h5>
                  <p>Stay up to date with the latest stories and commentary.</p>
                  <div className='help-btn-outer'>
                    <a href='javascript:void(0)'>Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp