// Create a variable to store the data structure.
const dataStructure = [
  {
    name: "foo1",
    value: "bar1",
  },
  {
    name: "foo2",
    value: "bar2",
  },
  {
    name: "foo3",
    value: "bar3",
  },
];

// Add the preventDefault() method to the form's submit event.
document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const value = document.querySelector("#value").value;
  editDataStructure(name, value);
});

// Create a function to edit the data structure.
function editDataStructure(name, value) {
  const element = dataStructure.find((item) => item.name === name);
  element.value = value;

  setItems();
  clearInputValue();
}

// Set data structures values to HTML 
function setItems(){
  document.querySelector('.data-structure').innerHTML = '';
  for(let i = 0; i<dataStructure.length; i++){
    createItem(dataStructure[i].name,dataStructure[i].value);
  }
}

// Clear inputs value after edited 
function clearInputValue(){
  document.querySelector('#name').value = '';
  document.querySelector('#value').value = '';
}

setItems();

// Create one li with p and set it to ul
function createItem(name,value){
  const ul = document.querySelector('.data-structure')
  const li = document.createElement('li');
  li.setAttribute('class','editable');

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = name;
  p2.textContent = value;

  li.appendChild(p1);
  li.appendChild(p2);

  ul.appendChild(li);
}