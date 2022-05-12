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
    validate: {
      is: ["^[A-Z][a-z]*$"], // Capital followed by lowercase only allowed, i flag at the end is Case Insensitive - bad
      isAlpha: true
    }
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      is: /^[A-Z][a-z]*$/, // Capital followed by lowercase only allowed 
      isAlpha: true
    }
  }, 

  // Add email, imageUrl, and gpa
  email: { 
    type: Sequelize.STRING,
    allowNull: false, // Needed
    validate: {
      contains: "@", // Must have an at
      isEmail: true // Also can just use Sequelize's Email checker
      // Email checking with regex: ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ 
    }
  }, 

  imageUrl: {
    type: Sequelize.STRING, 
    validate: {
      isUrl: true, // Use Sequelize's Url checker
    },
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

Student.sync(); 

// Export the student model
module.exports = Student;