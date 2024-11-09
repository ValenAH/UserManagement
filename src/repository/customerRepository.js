const pool = require('../db/mysqlConnection');
const Customer = require('../models/Customer');

const createCustomer = async (name, lastname, email, documentTypeId, documentNumber, address, phone, userId) => {
  try {

        const [result] = await pool.query(
            'INSERT INTO customer (name, lastname, email, document_type_id, document_number, address, phone, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, lastname, email, documentTypeId, documentNumber, address, phone, userId]
          );
        return new Customer(result.insertId, name, lastname, email, documentTypeId, documentNumber, address, phone, userId);
    
  }
  catch (error) {
    console.error("error en la base de datos",error);
    return null;
  }
};

const validateCustomer = async (documentNumber) => {
    const [rows] = await pool.query(
        'SELECT * FROM customer WHERE document_number = ?',
        [documentNumber]
      );
      return rows.length > 0
}

module.exports = { createCustomer,validateCustomer };