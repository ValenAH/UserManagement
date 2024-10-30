class User {
    constructor(id, username, password, role_id) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.role_id = role_id;
    }
  }
  
  module.exports = User;