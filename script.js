document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("show");
});

let index = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

function showSlide(n) {
    if (n >= slides.length) index = 0;
    else if (n < 0) index = slides.length - 1;
    else index = n;
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

setInterval(nextSlide, 3000);

// review section

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle("active", i === index);
    });
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}