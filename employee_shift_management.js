//TASK 1 - Create an Employees Array of Employee Objects:

let employees = [
    {name: 'Lana', shifts: [{day: 'Monday', hours: 7},{day: 'Thursday', hours: 9}]},
    {name: 'Kanye', shifts: [{day: 'Tuesday', hours: 6},{day: 'Wednesday', hours: 8}]},
    {name: 'Katy', shifts: [{day: 'Friday', hours: 8},]},
    {name: 'Lisa', shifts: [{day: 'Tuesday', hours: 9},]}
];

//TASK 2 - Create a Function to Display Employee Shift Details:

function displayEnployeeShifts (employees) {
    console.log(`Employee: ${employees.name}`)
    //this will console the employee name 

    employees.shifts.forEach(shifts =>{
        console.log(`Day: ${shifts.day}, Hours: ${shifts.hours}`);
    //using the forEach and arrow method to locate the day shifts in the employees array
    })};

displayEnployeeShifts(employees[0]);

//TASK 3 - Create a Function to Assign a New Shift: