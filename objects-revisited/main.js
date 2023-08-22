// creates business object with nested employee objects

const business = {
  opens: '9 AM',
  closes: '5 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th'],
  employees: {
    john: {
      position: 'vocals/rhythm guitar',
      daysOfWeekWorking: ['M', 'Th'],
    },
    paul: {
      position: 'vocals/bass',
      daysOfWeekWorking: ['M', 'T', 'W'],
    },
    george: {
      position: 'lead guitar/vocals',
      daysOfWeekWorking: ['M', 'W'],
    },
    ringo: {
      position: 'drums/vocals',
      daysOfWeekWorking: ['M', 'W', 'Th'],
    },
  },
};

// updates daysOpen for business and daysOfWeekWorking for each employee

function addWeekends(business) {
  // update business days to include weekends
  business.daysOpen.push('Sat', 'Sun');

  // update employees work days to include weekends
  Object.values(business.employees).forEach((employee) => {
    employee.daysOfWeekWorking = employee.daysOfWeekWorking.concat(
      'Sat',
      'Sun'
    );
  });
}

addWeekends(business);
console.log(business.employees.john.daysOfWeekWorking);

// working with business object -

// DOM queries
const $xhr = new XMLHttpRequest();

// adds employees
function addEmployees() {
  const results = [];
  // handles API search request
  $xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  $xhr.responseType = 'json';
  $xhr.addEventListener('load', () => {
    console.log($xhr.status);
    results.push($xhr.response);
    console.log(results);
  });
  $xhr.send();
}

addEmployees(business);
