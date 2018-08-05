import React from 'react'
export default class App extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mx-3 fixed-top">
              <a className="navbar-brand" href="#">Brand</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md mt-5'>
            <div className='my-2 p-5 mx-auto text-center bg-light'>
              <h1>Headline</h1>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <a className='btn btn-outline-secondary' href='#'>Resume Maybe</a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <div className='mt-2 pt-4  text-center text-white bg-dark'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-light rounded-top mx-auto' style={{height: '300px'}}>

              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='mt-2 pt-4  text-center bg-light'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-dark rounded-top mx-auto' style={{height: '300px'}}>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          
          <div className='col-md'>
            <div className='mt-2 pt-4  text-center bg-light'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-dark rounded-top mx-auto' style={{height: '300px'}}>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='mt-2 pt-4  text-center text-white bg-primary'>
              <h2>Section</h2>
              <p className='lead font-weight-normal'>
                Some thing really catchy for you goes here. Something silly most likely.
              </p>
              <div className='w-75 bg-secondary rounded-top mx-auto' style={{height: '300px'}}>

              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}
