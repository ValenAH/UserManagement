
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { username , password, roleId } = req.body;
  try {
    const user = await userService.createUser(username, password, roleId);
    console.log("user",user);
  } catch (error) {
    console.log("error",error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    console.log("user",user);
  } catch (error) {
    console.log("error",error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, roleId } = req.body;
  try {
    const user = await userService.updateUser(id, username, password, roleId);
    console.log("user",user);
  } catch (error) {
    console.log("error",error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    console.log("userid",id);
  } catch (error) {
    console.log("error",error);
  }
};

const getAllUsers = async (req,res) => {
  try {
    const users = await userService.getAllUsers();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    console.error("Error en el controlador:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener los usuarios' }),
    };
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };
