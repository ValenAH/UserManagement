//const { updateUser } = require("./src/controllers/userController");
const { createCustomer} = require("./src/controllers/customerController");

  (async () => {
    console.clear();
    const customer = {
      name: 'Valentina',
      lastname: 'Alzate',
      email: 'valenah52@gmail.com',
      document_type_id: 1,
      document_number: '1037668005',
      address: 'Cra 24 F 40 sur',
      phone: '3103775171',
    };
    
    const user = {
      username: 'valen',
      password: 'securepassword',
      roleId: 1,
    };
    const event={
      body: {customer, user},
    }
    /*
    //updateUser
    const event= { 
      queryStringParameters: {id: 4},
      body: {"username": "mateo", "password": "prueba", "roleId": 1}
    };
    /*
    const event= { 
      queryStringParameters: {id: 1},
    };*/
    const response = await createCustomer(event);
    console.log(response);
  })()