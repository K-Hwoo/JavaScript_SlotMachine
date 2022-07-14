// HTML에서도 지우고 데이터베이스에서도 지워야 하는게 핵심,,

const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

const toDoInput = toDoForm.querySelector("input");

let toDos_saveList = [];  // localstorage에 이미 저장된 것들을 동기화 해줘야함
const TODOS_KEY = "toDos";
const saved_toDos = localStorage.getItem(TODOS_KEY);

function handleToDosubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value =  "";
    const newTodo_object = {
        text : newTodo,
        id : Date.now() // 각각의 값을 구별하기 위해 Date.now()로 랜덤한 숫자를 저장함
    };
    toDos_saveList.push(newTodo_object);

    showToDo(newTodo_object); // 함수의 인자로 객체를 보냄
    saveToDo_to_localstorage();
} 
 
function saveToDo_to_localstorage () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos_saveList)); // JSON.stringify() ㅡ> 모든걸 String으로 바꿔줌
}

function showToDo (td) {
    const new_li = document.createElement("li");
    const span = document.createElement("span");
    new_li.id = td.id;
    span.innerText = td.text + " ";
    const delButton = document.createElement("button")
    delButton.innerText = "X"

    delButton.addEventListener("click", delToDo)

    new_li.appendChild(span);
    new_li.appendChild(delButton); // append 는 항상 마지막에
    toDoList.appendChild(new_li);

    delButton.classList.add("btn");
    delButton.classList.add("btn-danger");
    delButton.classList.add("btn-sm");
}

function delToDo(event) {   // 프로퍼티 사용 방법 !!
    // console.dir(event) 이벤트가 가지고 있는 프로퍼티들 볼 수 있음.
    const clicked_li = event.target.parentElement; // button의 부모노드 li
    clicked_li.remove(); 
    // !중요 알고리즘!  지우고 싶은 item을 빼고 새로운 배열 만듦 ,,,, .filter() ! 파이썬 filter 함수와 동일
    toDos_saveList = toDos_saveList.filter((toDo_item) => parseInt(clicked_li.id) !== toDo_item.id);
    //           clicked_li.id ㅡ> string, toDo_item.id ㅡ> int
    saveToDo_to_localstorage();
}

toDoForm.addEventListener("submit", handleToDosubmit);

if (saved_toDos !== null) {  // !! JSON.parsed(), forEach() 이해
    const parsed_toDos = JSON.parse(saved_toDos);
    toDos_saveList = parsed_toDos;  // 동기화 과정
    parsed_toDos.forEach(showToDo); // forEach() ㅡ> 실행 함수에 item 정보 제공
}