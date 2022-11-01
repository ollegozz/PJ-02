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
    arrLeft = sliderBody.querySelector('.complited-project__icon_arr-left')
    arrRight = sliderBody.querySelector('.complited-project__icon_arr-right')
    sliderPoint = sliderBody.querySelector('.complited-project__icon_points')
    sliderImg = sliderBody.querySelector('.complited-project__image-img')
    sliderImgTitle = sliderBody.querySelector('.complited-project__image-text')
    let indexImg = 0
 
    initImages()
    initDots()

    function initImages() {
        images.forEach((index) => {
            index = indexImg
            let imageDiv = `<img src="${images[index].url}">`
            sliderImg.innerHTML = imageDiv;
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            // let dot = `<div class="icon_point" data-index="${index}"></div>`;
            let dot = `<div class="icon_point n${index === indexImg ? "point-active" : ""}" data-index="${index}"></div>`;            
            sliderPoint.innerHTML += dot;
        });
        sliderPoint.querySelectorAll(".icon_point").forEach(dot => {
            dot.addEventListener("click", function () {
                indexImg = this.dataset.index                
                initImages();
            })
        })
        // function moveSlider(num) {
        //     sliderPoint.querySelector(".point-active").classList.remove("point-active");
        //     sliderPoint.querySelector(".n" + num).classList.add("point-active");
        //     initImages()
        // }
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

