class Customer {
    constructor(id, name, lastname, email, document_type_id, document_number, address, phone, user_id) {
      this.id = id;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.document_type_id = document_type_id;
      this.document_number = document_number;
      this.address = address;
      this.phone = phone;
      this.user_id = user_id;
    }
  }
  
  module.exports = Customer;