// Define business object
const business = {
  opens: '7AM',
  closes: '8PM',
  totalEmployees: 5,
  daysOpen: ['Tu', 'W', 'Th', 'F'],
  employees: {
    marshall: {
      position: 'software programmer',
      daysOfWeekWorking: ['Tu', 'W', 'F'],
    },
    aiden: {
      position: 'full stack developer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    hannah: {
      position: 'ceo',
      daysOfWeekWorking: ['Tu', 'Th', 'F'],
    },
    dennis: {
      position: 'cfo',
      daysOfWeekWorking: ['W', 'F'],
    },
    jessica: {
      position: 'web developer',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
  },
};

// Adds weekends to business days and employee schedules
function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');
  for (const key in business.employees) {
    business.employees[key].daysOfWeekWorking.push('Sat', 'Sun');
  }
}
addWeekends();

// function addWeekends2() {
//   business.daysOpen.push('Sat', 'Sun');
//   Object.values(business.employees).forEach((e) => {
//     e.daysOfWeekWorking.push('Sat', 'Sun');
//   });
// }
// addWeekends2();
// console.log(business);

// API request
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was NOT okay');
    }
    const res = await response.json();
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
}
// Adds new employees to the business from the API request
async function addEmployees() {
  const users = await fetchUsers();
  for (let i = 0; i < 4; i++) {
    business.employees[users[i].name] = {
      position: `job ${i}`,
      daysOfWeekWorking: ['M', 'Tu', 'W'],
    };
    business.totalEmployees++;
  }
}
addEmployees();
console.log(business);

// Deletes an employee
function deleteEmployee(employeeName) {
  if (business.employees[employeeName] === undefined) {
    console.log('There is no employee with that name');
    return;
  }
  business.totalEmployees--;
  delete business.employees[employeeName];
}
deleteEmployee('dennis');
