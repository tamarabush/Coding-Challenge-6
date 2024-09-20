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

displayEnployeeShifts(employees[2]);



//TASK 3 - Create a Function to Assign a New Shift:

function assignShifts(employeeName, dayShift, numhours) {
    let employee = employees.find(emp => emp.name === employeeName);
    //used find method to locate employee name in the array

    if (!employee) {
        console.log(`ERROR: Employee ${employeeName} was not found`);
        return;
    //"!" negates if employee was found, therefore will console an error
    }
    const shiftsAvailable = employee.shifts.some(shift => shift.day === dayShift);
    //using the some method to test if the shifts passes in the array 
    if (shiftsAvailable) {
        console.log(`ERROR: ${employeeName} is already scheduled on ${dayShift}`);
        return; 
    //if the shift already exists in the array that it will console an error
    }
    employee.shifts.push({ day: dayShift, hours: numhours });
    //using the push method to input new shifts and hours 
    console.log(`Shift is now assigned to ${employeeName} on ${dayShift} for ${numhours} hours.`);
    //this will console a new shift for an employee if they are available 
}
assignShifts('Harry', 'Thursday', 9);
assignShifts('Lana', 'Monday', 6);
assignShifts('Kanye', 'Thursday', 9);



//TASK 4 - Create a Function to Calculate Total Hours Worked:

function calculateTotalHours(employeeName) {
    let employeeFind = employees.find(emp => emp.name === employeeName);
    //using the find and arrow method to locate employee name

    if (employeeFind) {
        const totalNumHours = employeeFind.shifts.reduce((total, dayShift) => total + dayShift.hours, 0)
        //using the reduce and arrow method to add the total amount of hours 
        console.log(`${employeeName} has worked a a total of ${totalNumHours} hours`);
        //this will console a message of the amount of hours worked 
        return totalNumHours;
    }
};

calculateTotalHours('Lana');



//TASK 5 - 