const customerService = require('../services/customerService');

const createCustomer = async (event) => {
    const user  = event.body.user;
    const customer = event.body.customer;
    let response
    try {
      response  = await customerService.createCustomer(user, customer);
      return {
        statusCode: response.statusCode,
        body: JSON.stringify(response.body),
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: JSON.stringify(error),
      };
    }
  };

  module.exports = { createCustomer}