import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <React.Fragment>
      <div className='jumbotron  padding ' id='about_us'>
        <div className='container-fluid'>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='display-4'>ABOUT US</h1>
            </div>
            <hr />
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <p className='lead'>This is about page od beaty district</p>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <a href='/#contact_us'>
                <button className='btn btn-outline-secondary btn-lg'>
                  Contact US
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default About
