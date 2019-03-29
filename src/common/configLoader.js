'use strict'
const application = require('../config/application.json')
const fs = require('fs');
const path = require('path')

const ConfigLoader = class {

    load(filename) {
        let configFilePath = path.join(application.configDir, filename)
        try {
            // Load synchronously: blocks the rest of code before completing config loader
            let rawdata = fs.readFileSync(configFilePath)
            let config = JSON.parse(rawdata)
            return config
        } catch (err) {
            console.error('Load config error from ' + filename + ', ' + err)
            return null
        }      
    }

}

module.exports = ConfigLoader