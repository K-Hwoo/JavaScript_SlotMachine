const showPoints = document.querySelector("#points");

const putPoints = document.querySelector("#beting input");
const slotButton = document.querySelector("#beting button");

const showBox = document.querySelector("#showBox");
const showBoxText = showBox.querySelector("h3");

const IMAGE1 = document.querySelector("#slot_image1");
const IMAGE2 = document.querySelector("#slot_image2");
const IMAGE3 = document.querySelector("#slot_image3");

const images = ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg", "IMG_5.jpg", "IMG_6.jpg", "IMG_7.jpg", "IMG_8.jpg", "IMG_9.jpg", "IMG_10.jpg", "IMG_11.jpg"];

//const bgImage = document.createElement("img");  // createElement !!

//bgImage.src = `img/${chooseImage}`;
//bgImage.id = "bgSize";

//document.body.appendChild(bgImage);

function FisrtShowRandomImage() {
    const FirstShowImage1 = images[Math.floor(Math.random() * (images.length))];
    const FirstShowImage2 = images[Math.floor(Math.random() * (images.length))];
    const FirstShowImage3 = images[Math.floor(Math.random() * (images.length))];
    const checkLogin = localStorage.getItem("username");
    const points = localStorage.getItem("points");

    IMAGE1.src = `img/${FirstShowImage1}`
    IMAGE2.src = `img/${FirstShowImage2}`
    IMAGE3.src = `img/${FirstShowImage3}`

    if((points === null) || (checkLogin == null)) {
        showPoints.innerText = `로그인 해주세요!`
    } else {
        showPoints.innerText = `${points}`;
    }
}

function handleClickSlotButton(event) {
    event.preventDefault();
    const pickImage1 = images[Math.floor(Math.random() * (images.length))];
    const pickImage2 = images[Math.floor(Math.random() * (images.length))];
    const pickImage3 = images[Math.floor(Math.random() * (images.length))];
    const checkLogin = localStorage.getItem("username");
    const points = parseInt(localStorage.getItem("points"));  
    const BetingPoint = putPoints.value;
    const SEVEN = "IMG_11.jpg"

    if (checkLogin === null) {
        alert("슬롯 머신을 작동하려면 로그인 해주세요!")
    } else if (BetingPoint === "") {
        alert("베팅 할 포인트를 입력해주세요!")
    } else if (points < parseInt(BetingPoint)) {
        alert("포인트가 모자랍니다!")
    } else {
        IMAGE1.src = `img/${pickImage1}`
        IMAGE2.src = `img/${pickImage2}`
        IMAGE3.src = `img/${pickImage3}`

        let pointsAfterSlot = points - parseInt(BetingPoint);
        let resultPoint;
        let GamblingDividend;

        if ((pickImage1 === SEVEN) && (pickImage2 === SEVEN) && (pickImage3 === SEVEN)) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 100);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 100;
            showBoxText.innerText = `Lucky Seven!`;
        } else if (((pickImage1 === SEVEN) && (pickImage2 === SEVEN)) || ((pickImage2 === SEVEN) && (pickImage3 === SEVEN)) || ((pickImage1 === SEVEN) && (pickImage3 === SEVEN))) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 5);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 5;
            showBoxText.innerText = `Double Seven!`;
        } else if ((pickImage1 === pickImage2) && (pickImage2 === pickImage3)) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 10);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 10;        
            showBoxText.innerText = `Congratulations!`
        } else if ((pickImage1 === pickImage2) || (pickImage2 === pickImage3) || (pickImage1 === pickImage3)) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 3);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 3;
            showBoxText.innerText = `winning!`
        } else {
            resultPoint = pointsAfterSlot;
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = "꽝";
            showBoxText.innerText = `Bang :(`
        }

        console.log(`베팅한 포인트 : ${BetingPoint}`);
        console.log(`베팅 후 포인트 : ${pointsAfterSlot}`);
        console.log(`최종 포인트 : ${resultPoint}`);
        console.log(`배당 : ${GamblingDividend}`);
    }
}

let num1 = 0;
let num2 = 1;
let num3 = 2;

function gradientSlotResult() {
    const colorList = ["#fbfcb9be", "#ffcdf3aa", "#65d3ffaa"]
    if(num1 > 2) {
        num1 = 0;
    }
    if(num2 > 2) {
        num2 = 0;
    }
    if(num3 > 2) {
        num3 = 0;
    }
    showBox.style.backgroundImage = `linear-gradient(#000000, #000000), linear-gradient(to right, ${colorList[num1]}, ${colorList[num2]}, ${colorList[num3]})`;
    num1 += 1;
    num2 += 1;
    num3 += 1;
}

FisrtShowRandomImage()
slotButton.addEventListener("click", handleClickSlotButton);
setInterval(gradientSlotResult, 300);
