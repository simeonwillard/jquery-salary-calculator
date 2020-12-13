console.log('client.js');

$(document).ready(readyNow);

//declaring variables 
const employeeInfo = []; //will use to store objects created by user
let monthlyCost = 0; 
let totalMonthlyWages = []; //will use to store calculations of wages
let wages = 0;


function readyNow() {

    // on clicking the submit button run function handleClick 
    $('#submit').on('click', handleClick);

} // end readyNow

//storing the user input into an object and pushing that input into employeeInfo
function handleClick() {
    // testing function handleClick
    console.log('in handleClick');

    // creating an object to store user input to then push to our array
    let info = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#salary').val()
    } //end object info

    // pushing new object to the array employeeInfo
    employeeInfo.push(info);

    //testing if object was pushed
    console.log(employeeInfo);

    //clearing user inputs
    $('.info').val('');

    //calling function renderToDom to add employeeInfo to DOM
    renderToDom();

    //calling function addTotalCost 
    addTotalCost();

} // end handleClick

//rendering the pushed user input to a table on the DOM
function renderToDom() {
    //testing function renderToDom
    console.log('in renderToDom');

    //appending to the DOM objects in our array
    //clearing the list
    $('#employeeList').empty();

    //looping over the array to display each employee and calculate the 
    // monthly cost of each employee in dollars
    let wages = 0;
    for (let employee of employeeInfo) {
        wages = parseFloat(employee.annualSalary / 12);
        $('#employeeList').append(`
        <tr class="employees">
            <td id="deleteName">${employee.firstName}</td>
            <td id="deleteLast">${employee.lastName}</td>
            <td id="deleteID">${employee.idNumber}</td>
            <td id="deleteJob">${employee.jobTitle}</td>
            <td id="deleteSalary">$${employee.annualSalary}</td>
            <td><button class="delete btn btn-danger">Delete</button> 
        </tr>`);


    } // end for loop

    // storing wages as a number, rounded to 2 decimal places, in the 
    // variable monthlyCost and pushing those values to an array
    monthlyCost = Number.parseFloat(wages).toFixed(2);
    totalMonthlyWages.push(monthlyCost);
    console.log(totalMonthlyWages);
    console.log(monthlyCost)

} // end renderToDom


function addTotalCost() {

    //testing function addTotalCost
    console.log('in addTotalCost');
    let sumOfWages = 0;

    //add together all monthly wages

    for (let i = 0; i < totalMonthlyWages.length; i++) {
        sumOfWages += Number(totalMonthlyWages[i]);
    } // end for loop
    console.log('sum of wages is: ', sumOfWages);

    $('#totalCost').empty();

    $('#totalCost').append(`
    <td id="total">Total Monthly: $${sumOfWages.toFixed(2)}</td>
    `);

    if (sumOfWages >= 20000) {
        $('#total').css("background-color", "red");
    }// end if statement

    // on the click of the delete button, run function removeEmployee
    $('.delete').on('click', removeEmployee);

} // end addTotalCost

// creating a function to delete an employee on the click of the delete button
function removeEmployee(){

    //testing function
    console.log('in removeEmployee');
    
    //identifying the element to delete, in this case the row of the table that the clicked button is in
    $(this).parent().parent().remove();
}

   



// function renderTableHeadings(){

//     const headings = ['First Name', 'Last Name', 'ID Number', 'Job Title', 'Annual Salary'];
//     //generating table headings to the DOM
//     for(heads of headings){
//     $('.table').append(`
//     <thead id="tableHead">
//             <tr class="tableHead">
//                 <th class="tableHead">${heads}</th>
//                 // <th class="tableHead">${heads}</th>
//                 // <th class="tableHead">${heads}</th>
//                 // <th class="tableHead">${heads}</th>
//                 // <th class="tableHead">${heads}</th>
//             </tr>
//     </thead>
//     `);

//     //clearing table header so only one displays
//     $('#tableHead').empty();
//     }
// }