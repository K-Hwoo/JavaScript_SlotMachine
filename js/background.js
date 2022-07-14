//const images = ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg", "IMG_5.jpg", "IMG_6.jpg"];

//const chooseImage = images[Math.floor(Math.random() * (images.length))];

//const bgImage = document.createElement("img");  // createElement !!

//bgImage.src = `img/${chooseImage}`;
//bgImage.id = "bgSize";

//document.body.appendChild(bgImage);

const BODY = document.querySelector("body")

BODY.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/BG.jpg')";
BODY.style.backgroundSize = "100% 100%";
BODY.style.backgroundRepeat = "no-repeat"
BODY.style.backgroundPosition = "left top"
BODY.style.backgroundAttachment = "fixed"
BODY.style.overflowX = "hidden";
BODY.style.margin = "0";

BODY.style.display = "flex"
BODY.style.flexDirection = "column"
BODY.style.justifyContent = "space-between"
BODY.style.alignItems = "center"
BODY.style.minHeight = "100vh"
BODY.style.gap = "5px 0px"

BODY.style.color = "white"  