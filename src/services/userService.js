const userRepository = require('../repository/userRepository');

const createUser = async (username, password, roleId) => {
  /*if (!username || !password || !roleId) {
    throw new Error('Faltan datos');
  }*/
  console.log("servicio ","username", username, "password", password, "roleId", roleId);
  return await userRepository.createUser(username, password, roleId);
};

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

const updateUser = async (id, username, password, roleId) => {
  const user = await userRepository.updateUser(id, username, password, roleId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

const deleteUser = async (id) => {
  const deleted = await userRepository.deleteUser(id);
  if (!deleted) {
    throw new Error('Usuario no encontrado');
  }
};

const getAllUsers = async () => {
  try {
    const users = await userRepository.getAllUsers();
    return users;
  } catch (error) {
    console.error("Error en el servicio:", error);
    throw error;
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };