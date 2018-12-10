const baseImage = 'w-100 rounded-top mx-auto'
const baseBox = 'mt-1 px-1 pt-2 text-center h-100'
const baseBoxMain = 'my-1 p-5  text-center h-100'
const styleMap = {
  dark: {
    image: `${baseImage}`,
    box: `${baseBox} text-white bg-dark`
  },
  light: {
    image: `${baseImage}`,
    box: `${baseBox} bg-light`
  },
  lightMain: {
    image: `${baseImage}`,
    box: `${baseBoxMain} bg-light`
  },
  darkMain: {
    image: `${baseImage}`,
    box: `${baseBoxMain} text-white bg-dark`
  },
  undefined: {
    image: `${baseImage}`,
    box: `${baseBox} bg-light`
  },
  null: {
    image: `${baseImage} `,
    box: `${baseBox} bg-light`
  }
}

export default styleMap
