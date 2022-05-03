/*==================================================
/database/utils/configDB.js

It declares and exports the variables for database name, username, and password.
==================================================*/
// Declare the variables for database name, username, and password.
const dbName = 'starter-server';
const dbUser = 'postgres';
const dbPwd = 'dbPwd'; // This is literally the password I put. 

// Export the variables 
module.exports = {
  dbName,
  dbUser,
  dbPwd
};
