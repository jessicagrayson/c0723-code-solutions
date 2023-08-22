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

  // update employees work days to include weeks
  Object.values(business.employees).forEach((employee) => {
    employee.daysOfWeekWorking = employee.daysOfWeekWorking.concat(
      'Sat',
      'Sun'
    );
  });
}

console.log(addWeekends(business));
