//greeting ref: w3schools
const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById("greeting").innerHTML = greeting;
//create a to do list ref: code explained
let clear = document.querySelector(".erase");
let dateElement = document.getElementById("date");
let list = document.getElementById("list");
let input = document.getElementById("input");

//classes names for creating object
let CHECK = "far-fa-check-circle";
let UNCHECK = "far-fa-circle";
let LINE_THROUGH = "lineThrough";
let LIST = [], id = 0;

//Show todays date
let option = {
    weekday : "short";
    month : "short",
    day : "numeric"
};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en", options);

//Add task to-Do function
function addToDo)addToDo. id. done, trash) {
    if(trash) {return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `<li class = "item>
    <i class="far fa-circle"${DONE} job="complete" id=${id}></i>
      <p class="text" ${LINE}>${toDo}</p>
      <i class="far fa-trash-alt" job="delete" id=${id}></i>
  </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}
//Add item to list when user hits enter key number 13 event listener
document.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        const toDo = input.nodeValue;
//Add item to list if not empty
if(toDo) {
    addToDo(toDo);
    LIST.push ({
        name : toDo,
        id : id,
        done : false,
        trash : fasle
    });
    id++;
}
input.value = "";
    }
});
//Function toggel check and uncheck when circle icon is clicked
function completeToDo(element) {
    element.classList.toggle(UNCHECK);
    element.classList.toggle(CHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
}

function removeToDo (element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}