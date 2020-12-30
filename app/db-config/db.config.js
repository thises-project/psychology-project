const HOST_NAME = require('../../config/keys')
const USER_NAME = require('../../config/keys')
const PASS_WORD = require('../../config/keys')
const DATA_BASE = require('../../config/keys')

module.exports={
    HOST:HOST_NAME,
    USER:USER_NAME,
    PASSWORD:PASS_WORD,
    DB:DATA_BASE,
    connectionLimit:50,
    queueLimit:50,
    waitForConnection: true


}

