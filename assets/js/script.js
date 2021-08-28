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

//class names for creating object
let CHECK = "far-fa-check-circle";
let UNCHECK = "far-fa-circle";
let LINE_THROUGH = "lineThrough";

let LIST = [],
    id = 0;

//Show todays date
let options = {
    weekday: "short",
    month: "short",
    day: "numeric"
};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en", options);

//Add task to-Do function
function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }

//constant variables
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class = "item">
    <i class="far fa-circle"${DONE} job="complete" id=${id}></i>
      <p class="text" ${LINE}>${toDo}</p>
      <i class="far fa-trash-alt" job="delete" id=${id}></i>
  </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}
//Add item to list when user hits enter key number 13 event listener
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const toDo = input.value;
        //Add item to list if not empty
        if (toDo) {
            addToDo(toDo);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
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

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}

//Add event listener to click function on job completed and to delete
list.addEventListener("click", function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
// int value; // this variable temporarily unused

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
});
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
