
const userService = require('../services/userService');

const createUser = async (event) => {
  const { username , password, roleId } = event.body;
  try {
    const user = await userService.createUser(username, password, roleId);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener el usuario' }),
    };
  }
};

const getUserById = async (event) => {
  const { id } = event.queryStringParameters;
  try {
    const user = await userService.getUserById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener el usuario' }),
    };
  }
};

const updateUser = async (event) => {
  const { id, username, password, roleId } = event.body;
  try {
    const user = await userService.updateUser(id, username, password, roleId);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    console.log("error",error);
  }
};

const deleteUser = async (event) => {
  const { id } = event.queryStringParameters;
  try {
    await userService.deleteUser(id);
    return {
      statusCode: 200,
      body: JSON.stringify(`Se actualizo el usuario con el id ${id}`),
    };
  } catch (error) {
    console.log("error",error);
  }
};

const getAllUsers = async () => {
  try {
    const users = await userService.getAllUsers();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener los usuarios' }),
    };
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };
