import React from 'react';
const Headline = () => (
  <div className="row mt-3">
    <div className="col-md mt-5">
      <div className="my-2 p-5 mx-auto text-center bg-light">
        <h1>Headline</h1>
        <p className="lead font-weight-normal">
          Some thing really catchy for you goes here. Something silly most likely.
        </p>
        <div>
          <input type="text" placeholder="shit" className="h1 text-center" style={
            {
              background: 'transparent',
              border: 'none'
            }
          }/>
        </div>
        <a className="btn" href="#">Resume Maybe</a>
      </div>
    </div>
  </div>
)


export default Headline
