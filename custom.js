let user = document.querySelector("#user"),
  add = document.querySelector("#add"),
  taskList = []; //입력한것을 담을 수 있는 배열
let tabs = document.querySelectorAll(".tabs li");
let filterList = []; //진행중, 끝남
let mode = "all";

add.addEventListener("click", addTask); //클릭했을 때 입력하려면 ()가 없어야 함

function addTask() {
  //   console.log("클릭");
  //   let taskContent = user.value;
  let taskContent = {
    id: randomId(), //고유번호 (함수도 호출할 수 있음)
    taskContent: user.value, // 입력한 내용
    isComplete: false, // false 미완성(진행중), true 끝남
  };
  taskList.push(taskContent); //입력한값, 고유번호, 진행여부를 taskList에 넣음
  console.log(taskList);
  user.value = "";
  render();
}
function render() {
  //   console.log("화면");
  list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }

  let result = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      result +=
        //   result +
        `
                  <div class="task">
                  <div class="task-done">${list[i].taskContent}</div>
                  <div>
                  
                  <button onclick="complete(${list[i].id})"><i class="fa-solid fa-check"></i></button>
                  <button onclick="finish(${list[i].id})"><i class="fa-solid fa-xmark"></i></button>
                  </div>
                  </div>
                  `;
    } else {
      result +=
        //   result +
        `
                  <div class="task">
                  <div>${list[i].taskContent}</div>
                  <div>
                  <button onclick="complete(${list[i].id})"><i class="fa-solid fa-check"></i></button>
                  <button onclick="finish(${list[i].id})"><i class="fa-solid fa-xmark"></i></button>
                  </div>
                  </div>
                  `;
    }
  }
  document.querySelector("#taskBoard").innerHTML = result;
}

function complete(id) {
  //   console.log("체크");
  //   console.log(id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      //   taskList[i].isComplete = true;
      taskList[i].isComplete = !taskList[i].isComplete;
    }
  }
  //   console.log(taskList);
  filter();
}

//어떤 체크를 눌렀는지 알아야함. 그래서 아이디가 필요함

function randomId() {
  //   console.log(Date.now());
  return Date.now();
}
// randomId();

function finish(id) {
  //   console.log("삭제");
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
    }
  }
  //   console.log(taskList);
  filter();
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("on");
    }
    tabs[i].classList.add("on");
    filter(event); //이벤트가 발생한 li
  });
}

function filter(event) {
  //   console.log("filter");
  if (event) {
    mode = event.target.id;
    //mode = event.target
    console.log(mode);
  }
  filterList = [];
  if (mode == "all") {
    // console.log("all");
    render();
  } else if (mode == "ongoing") {
    // console.log("ongoing");
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }

    render();
  } else if (mode == "done") {
    // console.log("done");
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }

    render();
  }
}
