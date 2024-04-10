const portfolioBtn = document.getElementById('portfolioBtn');
const portfolioHeaderBtn = document.getElementById('portfolioHeaderBtn');
const aboutHeaderBtn = document.getElementById('aboutHeaderBtn');
const contactHeaderBtn = document.getElementById('contactHeaderBtn');
const contactBtn = document.getElementById('contactBtn');
const navBtn = document.querySelectorAll('.nav_btn');
const underline = document.getElementsByClassName('underline');


navBtn.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const lineWidth = Math.min(link.offsetWidth * 0.8, 150);
        gsap.to(underline, {width: lineWidth, left: link.offsetLeft + (link.offsetWidth - lineWidth) / 2, duration: 0.3, ease: 'power2.inOut'});
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(underline, {width: 0, duration: 0.3, ease: 'power2.inOut'});
    });
});

portfolioBtn.addEventListener('click', scrollToPortfolio);
portfolioHeaderBtn.addEventListener('click', scrollToPortfolio);
aboutHeaderBtn.addEventListener('click', scrollToAbout);
contactHeaderBtn.addEventListener('click', scrollToContact);
contactBtn.addEventListener('click', scrollToContact);

function scrollToPortfolio() {
    const portfolioSection = document.getElementsByClassName('portfolio_section')[0];
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    const aboutSection = document.getElementsByClassName('about_section')[0];
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    const contactSection = document.getElementsByClassName('bottom_section')[0];
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

//==============================================================
//========================   SLIDER   ==========================
//==============================================================

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
    }, 8000);

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