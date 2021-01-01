const HOST_NAME = require('../../config/keys')
const USER_NAME = require('../../config/keys')
const PASS_WORD = require('../../config/keys')
const DATA_BASE = require('../../config/keys')

module.exports={
    host:HOST_NAME,
    username:USER_NAME,
    password:PASS_WORD,
    databaseName:DATA_BASE,
    connectionLimit:50,
    queueLimit:50,
    waitForConnection: true


}

