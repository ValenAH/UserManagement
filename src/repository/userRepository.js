const pool = require('../db/mysqlConnection');
const User = require('../models/User');

const createUser = async (username, password, roleId) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO user (username, password, role_id) VALUES (?, ?, ?)',
      [username, password, roleId]
    );
    console.log("result",result);
    return new User(result.insertId, username, password, roleId);
  }
  catch (error) {
    console.error("error en la base de datos",error);
    return null;
  }
};

const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
  if (rows.length === 0) return null;
  const { username, password, role_id } = rows[0];
  return new User(id, username, password, role_id);
};

const updateUser = async (id, username, password, roleId) => {
  const [result] = await pool.query(
    'UPDATE user SET username = ?, password = ?, role_id = ? WHERE id = ?',
    [username, password, roleId, id]
  );
  if (result.affectedRows === 0) return null;
  return new User(id, username, password, roleId);
};

const deleteUser = async (id) => {
  const [result] = await pool.query('DELETE FROM user WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

const getAllUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM user');
    return rows;
  } catch (error) {
    console.error("Error en la base de datos:", error);
    throw error;
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };