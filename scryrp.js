let images = [{
    url: "./image/slider/1.jpg",
    title: "ROSTOV-ON-DON, ADMIRAL"
},
{
    url: "./image/slider/2.jpg",
    title: "SOCHI THIEVES"
},
{
    url: "./image/slider/3.jpg",
    title: "ROSTOV-ON-DON PATRIOTIC"
}];



function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        titles: false,
        dots: true,
        autoplay: false
    };

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".complited-project__icon_points");
    let sliderTitleText = document.querySelector(".complited-project__image-text");

    initImages();
    initArrows();

    if (options.dots) {
        initDots();
    }

    if (options.titles) {
        initTitles();
    }

    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
        if (options.titles) {
            sliderTitleText.querySelector(".image-title_active").classList.remove("image-title_active");
            sliderTitleText.querySelector(".n" + num).classList.add("image-title_active");
        }

    }


    function initTitles() {
        images.forEach((image, index) => {
            let titleDiv = `<div class="image-title n${index} ${index === 0 ? "image-title_active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitleText.innerHTML += titleDiv;
        });
        sliderTitleText.querySelectorAll(".image-title").forEach(title => {
            title.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initAutoplay() {
        setInterval(() => {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
            moveSlider(nextNumber);
        }, options.autoplayInterval);
    }
}

let sliderOptions = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function () {
    initSlider(sliderOptions);
});