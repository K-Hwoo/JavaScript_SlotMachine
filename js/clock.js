const clock = document.querySelector("h2#clock"); //#clock 써도 됨

clock.innerText = "";

function getTime () {
    let a_p = null;
    let modifiedHours = 0;

    const date = new Date();    // javascript Date 객체
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 문자열로 만들고 padStart 사용

    // 12시간 표기법 구현
    if ((12 < hours) && (hours <= 23)) {
        a_p = "PM";
        modifiedHours =  String((hours % 12)).padStart(2, "0");
    } else if (hours === 12) {
        a_p = "PM"
        modifiedHours =  String(hours).padStart(2, "0");
    } else {
        a_p = "AM";
        modifiedHours =  String(hours).padStart(2, "0");
    }

    clock.innerText = `${a_p} ${modifiedHours} : ${minutes} : ${seconds}`;
}

getTime() // 웹사이트 로딩 후 바로 한번 실행 시키기
setInterval(getTime, 1000);    // argument 2개  함수, 간격(ms)
// setTimeout(함수, ms);
 