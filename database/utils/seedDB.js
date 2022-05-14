/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
Comment out the call to this if you want to stop reseeding. 
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus-3-768x432.jpg"
	});

	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});

	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});

	// Create a new campus
	const dummy_campus4 = await Campus.create({
		name: "SUNY Binghamton",
		address: "4400 Vestal Parkway E, Vestal, NY",
		imageUrl: "https://www.binghamton.edu/research/images/compliance.jpg",
		description: "This is a school in Vestal, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "joes@gmail.com", 
		gpa: 3.7,
	});
	
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "mj@yahoo.com", 
		gpa: 4.0,
	});

	// Create a new student for a campus
	const dummy_student3 = await Student.create({
		firstname: "Peter",
      	lastname: "Parker",
		email: "parker.peter@gmail.com", 
		gpa: 4.0,
		imageUrl: "https://assets.teenvogue.com/photos/61d866f9c24dade8ee70cbb6/4:3/w_1996,h_1497,c_limit/GettyImages-171165631.jpg"
	});

	// Create a new student for a campus
	const dummy_student4 = await Student.create({
		firstname: "America",
      	lastname: "Chavez",
		email: "universejumper1@kamartaj.com", 
		gpa: 4.0,
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus);
	await dummy_student4.setCampus(dummy_campus4);
}

// Export the database seeding function
module.exports = seedDB;