export default function createIteratorObject(report) {
  // Create an array to hold all employees
  const employees = [];

  // Loop through each department in allEmployees
  for (const department of Object.keys(report.allEmployees)) {
    // Push each employee into the employees array
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
