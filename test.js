const { getAllUsers } = require("./src/controllers/userController");


  (async () => {
    console.clear();

    /*const event={
      body: {"username": "admin", "password": "123456", "roleId": 1},
    }
    //updateUser
    const event= { 
      params: {id: "40"},
      body: {"username": "admin", "password": "123456", "roleId": 1}
    };*/
    const event= { 
      params: {id: "43"},
    };
    const response = await getAllUsers();
    console.log(response);
  })()