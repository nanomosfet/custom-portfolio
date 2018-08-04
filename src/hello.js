import React, { Component } from 'react'

export default class Hello extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <div className='my-2 p-5 mx-auto text-center bg-light'>
              <h1>Headline</h1>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <a class='btn btn-outline-secondary' href='#'>Resume Maybe</a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <div className='mt-2 pt-4 text-center text-white bg-dark'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-light rounded-top mx-auto' style={{height: '300px'}}>

              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='mt-2 pt-4 mx-2 px-2 text-center bg-light'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-dark rounded-top mx-auto' style={{height: '300px'}}>

              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}
