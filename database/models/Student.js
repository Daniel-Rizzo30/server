/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false, 
    is: ["[A-Z][a-z]*"] // Capital followed by lowercase only allowed
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false, 
    is: ["[A-Z][a-z]*"] // Capital followed by lowercase only allowed
  }, 

  // Add email, imageUrl, and gpa
  email: { 
    type: Sequelize.STRING,
    allowNull: false, // Needed
    contains: "@", // Must have an at
    isEmail: true // Also can just use Sequelize's Email checker
  }, 

  imageUrl: {
    type: Sequelize.STRING, 
    isUrl: true, // Use Sequelize's Url checker
    // Give it this default value
    defaultValue: "https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855--milk-tart-entertaiment-news.jpg"
  }, 

  gpa: {
    type: Sequelize.DOUBLE,
    isDouble: true, // Must be a double
    validate: { // Must be between 0 and 4.0
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;