function minusBasic () {
    let basicAmount = document.querySelector(".basic__amount");
    let basicCount = parseInt(basicAmount.textContent);
    basicCount = basicCount - 1;
    if (basicCount >= 0) {
        basicAmount.innerHTML = basicCount;
    }
}

function plusBasic () {
    let basicAmount = document.querySelector(".basic__amount");
    let basicCount = parseInt(basicAmount.textContent);
    basicCount = basicCount + 1;
    if (basicCount <= 20) {
        basicAmount.innerHTML = basicCount;
    }
}

function minusSenior () {
    let seniorAmount = document.querySelector(".senior__amount");
    let seniorCount = parseInt(seniorAmount.textContent);
    seniorCount = seniorCount - 1;
    if (seniorCount >= 0) {
        seniorAmount.innerHTML = seniorCount;
    }
}

function plusSenior () {
    let seniorAmount = document.querySelector(".senior__amount");
    let seniorCount = parseInt(seniorAmount.textContent);
    seniorCount = seniorCount + 1;
    if (seniorCount <= 20) {
        seniorAmount.innerHTML = seniorCount;
    }
}

const basicAmount = document.querySelector(".basic__amount");
const seniorAmount = document.querySelector(".senior__amount");

// Image carousel

let imageSlideIndex = 1;
showImageSlides(imageSlideIndex);

// Next/previous controls
function plusImageSlides(n) {
  imageSlideIndex = imageSlideIndex + n;
  showImageSlides(imageSlideIndex);
}

// Thumbnail image controls
function currentImageSlide(n) {
  imageSlideIndex = n
  showImageSlides(imageSlideIndex);
}

function showImageSlides(n) {
  let imageSlides = document.getElementsByClassName("welcome__carousel-image");
  let imageDots = document.getElementsByClassName("welcome__control");
  let currentImage = document.querySelector(".welcome__counter");
 
  if (n > imageSlides.length) {imageSlideIndex = 1}
  if (n < 1) {imageSlideIndex = imageSlides.length}

  for (i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = "none";
  }
  for (i = 0; i < imageDots.length; i++) {
    imageDots[i].className = imageDots[i].className.replace(" welcome__control--active", "");
  }

  imageSlides[imageSlideIndex-1].style.display = "block";
  imageDots[imageSlideIndex-1].className += " welcome__control--active";
  currentImage.innerHTML = "0" + imageSlideIndex;
}


// Video carousel

let videoSlideIndex = 1;
showVideoMain(videoSlideIndex);

// Next/previous controls
function plusVideoSlides(n) {
  videoSlideIndex = videoSlideIndex + n;
  showVideoMain(videoSlideIndex);
}

// // Thumbnail video controls
function currentVideoSlide(n) {
  videoSlideIndex = n;
  showVideoMain(videoSlideIndex);
}

function showVideoMain(n) {
//   let videoMain = document.getElementsByClassName("video__carousel-main");
  let videoDots = document.getElementsByClassName("video__circle");
  console.log(videoDots);
  
//   if (n > videoMain.length) {videoSlideIndex = 1}
//   if (n < 1) {videoSlideIndex = videoMain.length}

//   for (i = 0; i < imageSlides.length; i++) {
//     imageSlides[i].style.display = "none";
//   }
  for (i = 0; i < videoDots.length; i++) {
    videoDots[i].className = videoDots[i].className.replace(" video__circle--active", "");
  }

//   imageSlides[imageSlideIndex-1].style.display = "block";
  videoDots[videoSlideIndex-1].className += " video__circle--active";
}

// function showVideoSlides (n) {

// }
