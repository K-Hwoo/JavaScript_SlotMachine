const showPoints = document.querySelector("#points");

const putPoints = document.querySelector("#beting input");
const slotButton = document.querySelector("#beting button");

const IMAGE1 = document.querySelector("#slot_image1");
const IMAGE2 = document.querySelector("#slot_image2");
const IMAGE3 = document.querySelector("#slot_image3");

const images = ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg", "IMG_5.jpg", "IMG_6.jpg", "IMG_7.jpg", "IMG_8.jpg", "IMG_9.jpg"];

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
    const SEVEN = "IMG_9.jpg"

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
        } else if (((pickImage1 === SEVEN) && (pickImage2 === SEVEN)) || ((pickImage2 === SEVEN) && (pickImage3 === SEVEN)) || ((pickImage1 === SEVEN) && (pickImage3 === SEVEN))) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 5);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 5;

        } else if ((pickImage1 === pickImage2) || (pickImage2 === pickImage3) || (pickImage1 === pickImage3)) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 3);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 3;
        } else if ((pickImage1 === pickImage2) && (pickImage2 === pickImage3)) {
            resultPoint = pointsAfterSlot + (parseInt(BetingPoint) * 10);
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = 10;
        } else {
            resultPoint = pointsAfterSlot;
            localStorage.setItem("points", resultPoint);
            showPoints.innerText = `${resultPoint}`;
            GamblingDividend = "꽝";
        }

        console.log(`베팅한 포인트 : ${BetingPoint}`);
        console.log(`베팅 후 포인트 : ${pointsAfterSlot}`);
        console.log(`최종 포인트 : ${resultPoint}`);
        console.log(`배당 : ${GamblingDividend}`);
    }
}


FisrtShowRandomImage()
slotButton.addEventListener("click", handleClickSlotButton);
