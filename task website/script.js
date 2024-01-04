let currentTarget = "";

let generateId = 3;

let sortedMain = [];

let priorityArray = [
  "task-importance",
  "task-importance-medium",
  "task-importance-high",
];

let tasthtml = ``;

function showNewTask() {
  const newTask = document.getElementById("create-task");

  newTask.style.display = "flex";
}
// add card open

function exitcard() {
  const exitTask = document.getElementById("create-task");

  exitTask.style.display = "none";
}
// add card close

// edit card exit
function exiteditcard() {
  const exitEdit = document.getElementById("edit-task");

  exitEdit.style.display = "none";
}

function showEditCard() {
  const editCard = document.getElementById("edit-task");

  editCard.style.display = "flex";
}
// edit card close

// the counting function

let howManyToDo = 0;
let howManyInProg = 0;
let howManyStuck = 0;
let howManyGive = 0;

// we also need to get the html sections for the numbers to be changed

let countToDo = document.getElementById("todonumm");
let countInProg = document.getElementById("inprognumm");
let countStuck = document.getElementById("stucknumm");
let countGive = document.getElementById("givenumm");
let numHTML = ``;

function count() {
  howManyToDo = 0;
  howManyInProg = 0;
  howManyStuck = 0;
  howManyGive = 0;
  console.log(howManyToDo, howManyGive, howManyInProg, howManyStuck);
  for (let i = 0; i < sortedMain.length; i++) {
    if (sortedMain[i].category == "toDo") {
      howManyToDo++;
      numHTML = `<h2 id="todonumm" class="clip-title-num" style="color: #ff71ce;">${howManyToDo}</h2>`;
      countToDo.innerHTML = numHTML;
    } else if (sortedMain[i].category == "inProgress") {
      howManyInProg++;
      numHTML = `<h2 id="inprognumm" class="clip-title-num" style="color: #ff71ce;">${howManyInProg}</h2>`;
      countInProg.innerHTML = numHTML;
    } else if (sortedMain[i].category == "stuck") {
      howManyStuck++;
      numHTML = `<h2 id="stucknumm" class="clip-title-num" style="color: #ff71ce;">${howManyStuck}</h2>`;
      countStuck.innerHTML = numHTML;
    } else if (sortedMain[i].category == "giveUp") {
      howManyGive++;
      numHTML = `<h2 id="givenumm" class="clip-title-num" style="color: #ff71ce;">${howManyGive}</h2>`;
      countGive.innerHTML = numHTML;
    }
  }
}

// toDo inProgress stuck giveUp high medium low
function addTheCard() {
  const title = document.getElementById("task-title-input").value;
  const description = document.getElementById("task-desc-input").value;
  const status = document.getElementById("card-categor").value;
  const priority = document.getElementById("card-import").value;

  generateId++;

  // finding out if the input is working
  console.log(title, description, status, priority);
  // pushing the new card into the mainarray
  sortedMain.push({
    id: generateId,
    title: title,
    description: description,
    category: status,
    priority: priority,
  });
  // starting the priority sorting
  const order = { high: 1, medium: 2, low: 3 };

  // now we need to add the cards to their respective spots, we need to loop it first

  sortedMain.sort((a, b) => {
    return order[a.priority] - order[b.priority];
  });
  console.log(JSON.stringify(sortedMain, null, 2));

  document.getElementById("todo-target").innerHTML = "";
  document.getElementById("inprogress-target").innerHTML = "";

  document.getElementById("stuck-target").innerHTML = "";

  document.getElementById("giveup-target").innerHTML = "";

  for (x = 0; x < sortedMain.length; x++) {
    // we first need to know which category it belongs to

    currentTarget = categoryFind(sortedMain[x].category);

    //   writediv(priorityFind(sortedMain[x].priority));

    renderdiv(x);

    resetcard();
    exitcard();
    count();
  }
}

function renderdiv(index) {
  const task = sortedMain[x];

  tasthtml = `
    <div class="list-item" id="task-${generateId}">
        <div class="icondiv">
            <svg class="content-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>
        <div class="the-task">
            <h1 class="task-header">${task.title}</h1>
            <p class="task-desc">${task.description}</p>
            <div class="priority-${task.priority}">${task.priority}</div>
        </div>
        <div class="icondiv">
            <svg onclick="removecard(${index})" class="content-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            <svg onclick="showEditCard()"" class="edit-button" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </div>
    </div>`;
  const todoElement = document.getElementById(currentTarget);

  todoElement.innerHTML = todoElement.innerHTML + tasthtml;
  console.log({ tasthtml });
}

// resetting the input card fields

function resetcard() {
  document.getElementById("task-title-input").value = "";
  document.getElementById("task-desc-input").value = "";
}

// category finding function

// the category
// toDo inProgress stuck giveUp high medium low
function categoryFind(e) {
  if (e == "toDo") {
    return "todo-target";
  } else if (e == "inProgress") {
    return "inprogress-target";
  } else if (e == "stuck") {
    return "stuck-target";
  } else if (e == "giveUp") {
    return "giveup-target";
  }
}

// priority finding function

function priorityFind(prio) {
  if (prio == "high") {
    return 2;
  } else if (prio == "medium") {
    return 1;
  } else if (prio == "low") {
    return 0;
  }
}

console.log(priorityFind("high"));

// div printing function

// function writediv(a) {
//   tasthtml = `
//                 <div class="list-item" id="task-${generateId}">
//                     <div class="icondiv">
//                         <svg class="content-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
//                     </div>
//                     <div class="the-task">
//                         <h1 class="task-header">${sortedMain[x].title}</h1>
//                         <p class="task-desc">${sortedMain[x].description}</p>
//                         <div class="${priorityArray[a]}">${sortedMain[x].priority}</div>
//                     </div>
//                     <div class="icondiv">
//                         <svg onclick="removecard(${x})" class="content-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
//                         <svg onclick="showEditCard()"" class="edit-button" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
//                     </div>
//                 </div>`;
//   const todoElement = document.getElementById(currentTarget);

//   todoElement.innerHTML = todoElement.innerHTML + tasthtml;
//   console.log({ tasthtml });
// }

// removing function

function removecard(index) {
  count();
  sortedMain.splice(index, 1);
  console.log("remove: ", JSON.stringify(sortedMain, null, 2));
  document.getElementById("todo-target").innerHTML = "";
  document.getElementById("inprogress-target").innerHTML = "";

  document.getElementById("stuck-target").innerHTML = "";

  document.getElementById("giveup-target").innerHTML = "";
  for (x = 0; x < sortedMain.length; x++) {
    // we first need to know which category it belongs to

    currentTarget = categoryFind(sortedMain[x].category);

    //   writediv(priorityFind(sortedMain[x].priority));

    renderdiv(x);
  }
}

function start() {
  for (x = 0; x < sortedMain.length; x++) {
    // we first need to know which category it belongs to

    currentTarget = categoryFind(sortedMain[x].category);

    //   writediv(priorityFind(sortedMain[x].priority));

    renderdiv(x);

    resetcard();
    exitcard();
    count();
  }
}
start();
