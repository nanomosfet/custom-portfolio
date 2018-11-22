// hacky fix to make sure we deep copy objects. Need to normalize state.

const deepCopy = (object) => JSON.parse(JSON.stringify(object))

export default deepCopy
