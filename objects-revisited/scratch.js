// // DOM queries
// const $xhr = new XMLHttpRequest();

// // generates random workdays
// function getRandomWorkdays(daysOpen) {
//   const workdays = daysOpen.filter((day) => day !== 'Sat' && day !== 'Sun');
//   const selectedWorkdays = [];

//   for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
//     const randomIndex = Math.floor(Math.random() * workdays.length);
//     selectedWorkdays.push(workdays[randomIndex]);
//     workdays.splice(randomIndex, 1);
//   }
// }

// // checks if an employee works full time
// function checkIfFullTime(daysOfWeekWorking) {
//   return daysOfWeekWorking.length > 5;
// }

// function addEmployees(business) {
//   fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     const first4Users = users.slice(0, 4);

//     first4Users.forEach((user) => {
//       const employee = {
//         position: 'unique job title placeholder',
//         daysOfWeekWorking: getRandomWorkdays(business.daysOpen),
//         fullTime: checkIfFullTime(),
//       };
//       business.totalEmployees[user.username] = employee;
//     });
//     business.totalEmployees += first4Users.length;
//     console.log(business);
//   });
// }
