const slides = document.querySelectorAll(".slide");

// & used (.querySelectorAll) and was not working as there are only one buttons each 
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");


slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let count = 0;
nextBtn.addEventListener("click", function() {
    count++;
    changeSlides();
});
prevBtn.addEventListener("click", function() {
    count--;
    changeSlides();
});

function changeSlides() {

    // ! diffrent navigation setting of slides in slider
    // if (count === slides.length) {
    //     count = 0;
    // }

    // if (count < 0) {
    //     count = slides.length - 1;
    // }


    if (count < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
    if (count > 0) {
        prevBtn.style.display = 'block';

    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}
//& to dont show the previous button untill on required,(or only int he starting slide) 
prevBtn.style.display = 'none';