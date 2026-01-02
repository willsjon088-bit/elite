const slider = document.getElementById('slider-track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function showSlide(i) {
    const cards = document.querySelectorAll('.slider-track .card');
    const cardWidth = cards[0].offsetWidth + 20; // include margin
    slider.style.transform = `translateX(${-cardWidth * i}px)`;
}

prev.addEventListener('click', () => {
    const cards = document.querySelectorAll('.slider-track .card');
    index = (index <= 0) ? cards.length - 1 : index - 1;
    showSlide(index);
});

next.addEventListener('click', () => {
    const cards = document.querySelectorAll('.slider-track .card');
    index = (index >= cards.length - 1) ? 0 : index + 1;
    showSlide(index);
});

// Auto-slide every 5 seconds
setInterval(() => { next.click(); }, 5000);
