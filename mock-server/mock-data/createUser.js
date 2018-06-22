const faker = require('faker')
const _ = require('lodash')

module.exports = () => ({
  id: _.uniqueId(),
  img: faker.image.avatar(),
  name: faker.name.lastName(),
  age: faker.random.number({ 'min': 1, 'max': 100 }),
  phone:faker.phone.phoneNumber()
})

