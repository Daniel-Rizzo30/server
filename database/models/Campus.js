/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"
const { dbUser } = require('../utils/configDB');

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING, 
    isUrl: true, // Use Sequelize's Url checker
    // Give it this default value - different from person's picture
    defaultValue: "https://thumbs.dreamstime.com/b/university-campus-building-hall-education-students-cartoon-vector-illustration-brotherhood-smart-nerd-classes-hipster-young-155883208.jpg"
  }, 

  description: {
    type: Sequelize.TEXT, // Must be text for it to be large. 
  }
});

// Export the campus model
module.exports = Campus;