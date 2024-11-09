//const { updateUser } = require("./src/controllers/userController");
const { createCustomer} = require("./src/controllers/customerController");

  (async () => {
    console.clear();
    const customer = {
      name: "Liliana",
      lastname: "Hincapie",
      email: "lili@gmail.com",
      document_type_id: 1,
      document_number: "43588603",
      address: "Cra 24 F 40 sur",
      phone: "3127077823"
    }
    
    const user = {
      username: 'lilimaqua',
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