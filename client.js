console.log('client.js');

$(document).ready(readyNow);

//declaring our array variable to store the user information
const employeeInfo = [];

function readyNow(){
    $('#submit').on('click', handleClick);
}

function handleClick(){

    // testing function handleClick
    console.log('in handleClick');

    // creating an object to store user input to then push to our array
    let info = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#salary').val()
    }

    // pushing new object to the array employeeInfo
    employeeInfo.push(info);

    //testing if object was pushed
    console.log(employeeInfo);

    //clearing user inputs
    $('.info').val('');

    //calling function renderToDom to add employeeInfo to DOM
    renderToDom();
    
}

function renderToDom(){

    //testing function renderToDom
    console.log('in renderToDom');

    //appending to the DOM objects in our array
    //clearing the list
    $('#employeeList').empty();

    //looping over the array to display each employee
    for(let employee of employeeInfo){
        $('#employeeList').append(`
        <tr class="employees">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
        </tr>`)
    }
    
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