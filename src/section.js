import React from 'react';

const baseImage = 'w-75 rounded-top mx-auto'
const baseBox = 'mt-2 pt-4  text-center'
const styleMap = {
  dark: {
    image: `${baseImage} bg-light`,
    box: `${baseBox} text-white bg-dark`
  },
  light: {
    image: `${baseImage} bg-dark`,
    box: `${baseBox} bg-light`
  }
}

const Section = ({ style }) => (
    <div className="col-md">
      <div className={ styleMap[style].box }>
        <h2>Section</h2>
        <p className="lead font-weight-normal">
          Some thing really catchy for you goes here. Something silly most likely.
        </p>
        <div className={ styleMap[style].image } style={{ height: '300px' }}>

        </div>
      </div>
    </div>
)

export default Section
