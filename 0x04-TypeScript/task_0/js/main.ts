// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 24,
  location: 'London',
};

// Put them in an array
const studentsList: Student[] = [student1, student2];

// Render a table with Vanilla JS
const table = document.createElement('table');

// Create table headers
const headerRow = document.createElement('tr');
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
