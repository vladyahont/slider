let slider1 = {
    imagesUrl: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImg: document.getElementById('slide-img'),

    start: function() {
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick)
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick)

        this.imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26889.png')
        this.imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26915.png')
        this.imagesUrl.push('https://cdn-icons-png.flaticon.com/512/18/18565.png')
        this.imagesUrl.push('https://cdn-icons-png.flaticon.com/512/26/26230.png')

        this.slideImg.src = this.imagesUrl[this.currentImageIndex]
        this.showPrevBtn.disabled = true
    },

    onShowPrevBtnClick: function(e) {
        this.currentImageIndex--;
        this.slideImg.src = this.imagesUrl[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
         this.showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function(e) {
        this.currentImageIndex++;
        this.slideImg.src = this.imagesUrl[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrl.length - 1)) {
         this.showNextBtn.disabled = true;
        }
    }
}
slider1.start()


