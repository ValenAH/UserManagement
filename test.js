//const { updateUser } = require("./src/controllers/userController");
const { createCustomer} = require("./src/controllers/customerController");

  (async () => {
    console.clear();
    const customer = {
      name: "Cristina",
      lastname: "Hincapie",
      email: "crispeta@gmail.com",
      document_type_id: 1,
      document_number: "10101010",
      address: "Cra 24 F 40 sur",
      phone: "31000000"
    }
    
    const user = {
      username: 'crismaqua',
      password: 'securepassword',
      roleId: 3,
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