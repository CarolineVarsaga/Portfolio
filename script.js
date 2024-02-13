let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("slides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active"); 
        }
        if (dots[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block"; 
            dots[slideIndex-1].classList.add("active"); 
        }
    }
    

    setInterval(function() {
        plusSlides(1);
    }, 6000);

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(Array.prototype.indexOf.call(dots, this) + 1);
        });
    }