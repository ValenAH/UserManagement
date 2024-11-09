const customerService = require('../services/customerService');

const createCustomer = async (event) => {
    const user  = event.body.user;
    const customer = event.body.customer;
    try {
      const response  = await customerService.createCustomer(user, customer);
      console.log("entidades creadas",response)
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: response }),
      };
    }
  };

  module.exports = { createCustomer}