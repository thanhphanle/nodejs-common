const ConfigLoader = require('../src/common/configLoader')
const configLoader = new ConfigLoader()

let config = configLoader.load('sample.json')
console.log(config)
