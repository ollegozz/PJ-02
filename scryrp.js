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



function initSlider() {
    if (!images || !images.length) return

    sliderBody = document.querySelector('.complited-project__body')
    goo = document.querySelector('._go')
    arrLeft = sliderBody.querySelector('.complited-project__icon_arr-left')
    arrRight = sliderBody.querySelector('.complited-project__icon_arr-right')
    sliderPoint = sliderBody.querySelector('.complited-project__icon_points')
    sliderImg = sliderBody.querySelector('.complited-project__image-img')
    sliderImgTitle = sliderBody.querySelector('.complited-project__image-text')
    let indexImg = 0    

    initImages()
    initDots()
    goTitle()

    function initImages() {
        images.forEach((index) => {
            index = indexImg
            let imageDiv = `<img src="${images[index].url}">`
            sliderImg.innerHTML = imageDiv;
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="icon_point _go ${index === indexImg ? "point-active" : ""}" data-index="${index}"></div>`;
            sliderPoint.innerHTML += dot;
            goDots()
        })
    }

    function goDots() {
        sliderPoint.querySelectorAll(".icon_point").forEach(dot => {
            dot.addEventListener("click", function () {
                indexImg = this.dataset.index
                sliderPoint.querySelectorAll('.point-active').forEach(n => n.classList.remove('point-active'));
                dot.classList.add('point-active')
                initImages();
            })
        })
    }


    function goTitle() {
        sliderImgTitle.querySelectorAll(".complited-project__image-title").forEach(title => {
            title.addEventListener("click", function () {
                indexImg = this.dataset.index
                sliderImgTitle.querySelectorAll('.complited-project__image-title_active').forEach(n => n.classList.remove('complited-project__image-title_active'));
                title.classList.add('complited-project__image-title_active')
                initImages();
            })
        })
    }


    arrRight.addEventListener('click', function () {
        indexImg == images.length - 1 ? indexImg = 0 : indexImg++
        initImages();
    })

    arrLeft.addEventListener('click', function () {
        indexImg == 0 ? indexImg = images.length - 1 : indexImg--
        initImages();

    })

}

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});

