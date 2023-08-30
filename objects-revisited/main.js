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

// checks if an employee works full time
function checkIfFullTime(daysOfWeekWorking) {
  return daysOfWeekWorking.length > 5;
}

// generates random workdays
function getRandomWorkdays(daysOpen) {
  const workdays = daysOpen.filter((day) => day !== 'Sat' && day !== 'Sun');
  const selectedWorkdays = [];

  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
    const randomIndex = Math.floor(Math.random() * workdays.length);
    selectedWorkdays.push(workdays[randomIndex]);
    workdays.splice(randomIndex, 1);
  }
  return selectedWorkdays;
}

// adds employees from api search
function addEmployees(business) {
  // fetches data from api
  fetch('https://jsonplaceholder.typicode.com/users')
    // parses response as json
    .then((response) => response.json())
    // handles the parsed json data and gets first 4 users
    .then((users) => {
      const first4Users = users.slice(0, 4);
      // loops through first four users
      first4Users.forEach((user) => {
        const employee = {
          position: 'unique job title placeholder',
          daysOfWeekWorking: getRandomWorkdays(business.daysOpen),
          fullTime: checkIfFullTime(),
        };
        // adds new a new employee
        business.employees[user.username] = employee;
      });

      // updates totalEmployees property
      business.totalEmployees += first4Users.length;
      // logs updated business object to console
      console.log(business);
    })
    // handles errors if any and returns an error message
    .catch((error) => {
      console.error('Error fetching employees:', error);
    });
}

console.log(addEmployees);
