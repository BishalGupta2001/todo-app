let todoArray = [
  // {item: 'complete todo app', dueDate: '26.12.23'},
  // {item: 'create  portfolio ', dueDate: '31.12.23'},
  // {item: 'complete myntra clone ', dueDate: '31.12.23'},
  // {item: 'do DSA', dueDate: '26.12.23'},
];
displayItem();

function addTodo() { //if button clicked this function will run 

  let inputElement = document.querySelector("#todo");//selected button
  let dateElement = document.querySelector("#todo-date");// selected date element 

  let todoValue = inputElement.value;//got the input value 
  let todoDate = dateElement.value;

  todoArray.push({item: todoValue, dueDate: todoDate}); //added in the array

  inputElement.value = ""; //input/value will be empty in input tag
  dateElement.value ="";

  displayItem();// then display  this function
}

function displayItem() {
  let todoItem = document.querySelector(".todo-items"); // selected div tag here
  let newHtml ="";//created a variable with empty value;
  for (let i = 0; i < todoArray.length; i++) {
    
    // let item =  todoArray[i].item;
    // let dueDate = todoArray[i].dueDate;
//                 OR
    let {item,dueDate} = todoArray[i];

    // ye div chalega har ek iteration ma 
    // what we have written span is giving that particular thing
    // button is deleting that specific  value or item 
    
    newHtml += ` 

    <span> ${item} </span>
    <span> ${dueDate} </span>
    <button onclick ="todoArray.splice(${i}, 1); displayItem();">Delete</button>`;
  }
  // 
  todoItem.innerHTML = newHtml;
}