import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

window.crypto = {
  getRandomValues: jest.fn().mockImplementation((arr) => {
    return arr.map((value) => value + 1)
  })
}

configure({ adapter: new Adapter() })
