let todoArray = [
  // {item: 'complete todo app', dueDate: '26.12.23'},
  // {item: 'create  portfolio ', dueDate: '31.12.23'},
  // {item: 'complete myntra clone ', dueDate: '31.12.23'},
  // {item: 'do DSA', dueDate: '26.12.23'},
];

window.addEventListener("load", function () {
  let storedData = localStorage.getItem("todoData");
  //  check if data already exist
  if (storedData) {
    // Parse the stored JSON data and update the todoArray
    todoArray = JSON.parse(storedData);
    displayItem();
  }
});

//function to  add new todo
function addTodo() {
  // Select input elements for todo text and date
  let inputElement = document.querySelector("#todo");
  let dateElement = document.querySelector("#todo-date");

  // Get values from input elements
  let todoValue = inputElement.value; //got the input value
  let todoDate = dateElement.value;

  // added new object value into array
  todoArray.push({ item: todoValue, dueDate: todoDate }); //added in the array

  // clear input values
  inputElement.value = "";
  dateElement.value = "";

  // set the given data by user in local storage and converted into json
  localStorage.setItem("todoData", JSON.stringify(todoArray));

  // display the updated todo item
  displayItem();
}

// Function to display todo items on the page
function displayItem() {
  // selected div tag here
  let todoItem = document.querySelector(".todo-items");

  //created a variable with empty value;
  let newHtml = "";

  for (let i = 0; i < todoArray.length; i++) {
    // let item =  todoArray[i].item;
    // let dueDate = todoArray[i].dueDate;
    //                 OR
    // Destructure the todo object to get item and dueDate
    let { item, dueDate } = todoArray[i];

    // ye div chalega har ek iteration ma
    // what we have written span is giving that particular thing
    // button is deleting that specific  value or item

    newHtml += ` 

    <span> ${item} </span>
    <span> ${dueDate} </span>
    <button onclick ="deleteTodo(${i})">Delete</button>`;
  }
  //
  todoItem.innerHTML = newHtml;
}

function deleteTodo(i) {
  // Remove the todo item at the specified index from the todoArray
  todoArray.splice(i, 1);

  // Save the updated todoArray to local storage as JSON
  localStorage.setItem("todoData", JSON.stringify(todoArray));

  // Display the updated todo items on the page
  displayItem();
}
