const LoginForm = document.querySelector("#login-form");

const LoginInput = LoginForm.querySelector("input");
// const LoginInput = document.querySelector("#login-form input");
const LoginButton = LoginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const USERPOINT_KEY = "points" //

function LoginSubmit(event) {
    const username = LoginInput.value;
        /*  유효성 검사를 HTML input의 프로퍼티로 처리하였음
            if (username === "") {
                alert("Please write yout name.")
            } else if (username.length > 15) {
                alert("Your name is too long.")
            } else {
            }
        */
    // form submit시 새로고침 안하게 하기, form 의 기본동작은 submit
    //event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);   // classlist !!
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);

    // Local Storage 사용
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(USERPOINT_KEY, 5000); //
}

function paintGreetings(UserName) {
    greeting.innerText = `Hello ${UserName}`; // 백틱 표기
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", LoginSubmit); // submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
} else {
    paintGreetings(savedUsername);
}