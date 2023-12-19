
let todoList=[{item:'Buy milk',dueDate:'22/10/2023'},{item:'go to school',dueDate:22/10/2023}]
displayItems();
function todo(){
let inputElement=document.querySelector("#todo-input");
let todoItem=inputElement.value;
let dateElement=document.querySelector("#todo-date");
let todoDateItem=dateElement.value;
console.log(todoItem)
todoList.push(todoItem);
console.log(todoList)
inputElement.value=''
displayItems();

}

function displayItems(){
  let containerElement= document.querySelector('#todo-container')
let newHtml=''
  for(let i=0; i< todoList.length;i++){
    newHtml+=`<div><span>${todoList[i]}</span><button onclick='todoList.splice(${i},1); displayItems();'> Delete</button></div>`
  }
containerElement.innerHTML=newHtml;
}
