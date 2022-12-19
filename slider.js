//find elements
let showPrevBtn = document.getElementById('show-prev-btn')
let showNextBtn = document.getElementById('show-next-btn')
let slideImg = document.getElementById('slide-img')

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick)
showNextBtn.addEventListener('click', onShowNextBtnClick)

//create images array
let imagesUrl = [];
imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26889.png')
imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26915.png')
imagesUrl.push('https://cdn-icons-png.flaticon.com/512/18/18565.png')
imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26230.png')

let currentImageIndex = 0
slideImg.src = imagesUrl[currentImageIndex]
showPrevBtn.disabled = true

//function definitions
function onShowPrevBtnClick() {
    currentImageIndex--
    slideImg.src = imagesUrl[currentImageIndex]
    showNextBtn.disabled = false

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true
    }
}
function onShowNextBtnClick() {
    currentImageIndex++
    slideImg.src = imagesUrl[currentImageIndex]
    showPrevBtn.disabled = false


    if (currentImageIndex === (imagesUrl.length - 1)) {
        showNextBtn.disabled = true
    }
}