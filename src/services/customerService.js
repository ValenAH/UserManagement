const userRepository = require('../repository/userRepository');
const customerRepository = require('../repository/customerRepository');

const createCustomer = async (user, customer) => {
    if (await customerRepository.validateCustomer(customer.document_number)){
      return {
        statusCode: 401,
        body: "Se encontró un usuario con el mismo número de identificación"
      }
    }else{
        const userCreated = await userRepository.createUser(user.username, user.password, user.roleId);
        const customerCreated =  await customerRepository.createCustomer(customer.name, customer.lastname, customer.email, customer.document_type_id, customer.document_number, customer.address, customer.phone, userCreated.id);
        const response = {
          statusCode: 200,
          body: {user:userCreated,customer:customerCreated}
        }
    return response
    }
  
};


module.exports = { createCustomer };