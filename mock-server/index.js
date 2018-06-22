const createUser = require("./mock-data/createUser")
const _ = require('lodash')

module.exports = () => ({
  userList: _.times(5, createUser)
})