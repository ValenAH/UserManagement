const { updateUser } = require("./src/controllers/userController");


  (async () => {
    console.clear();
    /*
    const event={
      body: {"username": "valen", "password": "valenadmin", "roleId": 1},
    }*/
    
    //updateUser
    const event= { 
      queryStringParameters: {id: 4},
      body: {"username": "mateo", "password": "prueba", "roleId": 1}
    };
    /*
    const event= { 
      queryStringParameters: {id: 1},
    };*/
    const response = await updateUser(event);
    console.log(response);
  })()