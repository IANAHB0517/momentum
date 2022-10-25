const images = ["0.jpg","1.jpg","2.jpg",];
const chosenImage = images[Math.floor(Math.random()* images.length)];
const body = document.querySelector("#container");
const BGI = "backGroundImage";

function createBGImg(){
    body.classList.add(BGI);
    // bgImage.src = `url(${chosenImage})`;
    body.style.background =`url(img/${chosenImage}) no-repeat center center`;
    body.style.backgroundSize = "cover";
}

const checkClassList = body.classList.contains(BGI);

if(checkClassList !== true){
    createBGImg();
}